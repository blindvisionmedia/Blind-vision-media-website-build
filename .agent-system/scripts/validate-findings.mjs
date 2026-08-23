#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.argv[2] ?? 'reports';
const severities = new Set(['critical', 'high', 'medium', 'low', 'info']);
const statuses = new Set(['open', 'accepted_risk', 'in_progress', 'fixed', 'verified', 'not_applicable']);
const evidenceTypes = new Set(['file', 'commit', 'pull_request', 'issue', 'test', 'workflow', 'command', 'runtime']);

async function walk(dir) {
  try {
    const entries = await readdir(dir);
    const files = [];
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const info = await stat(full);
      if (info.isDirectory()) files.push(...await walk(full));
      else if (entry.endsWith('.json')) files.push(full);
    }
    return files;
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }
}

function nonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function validateFinding(finding, file, index) {
  const errors = [];
  const at = `${file}${index === null ? '' : `#${index}`}`;

  if (!finding || typeof finding !== 'object' || Array.isArray(finding)) {
    return [`${at}: finding must be an object`];
  }

  for (const key of ['id', 'title', 'category', 'scenario', 'impact', 'recommendation', 'validation']) {
    if (!nonEmptyString(finding[key])) errors.push(`${at}: ${key} must be a non-empty string`);
  }

  if (!severities.has(finding.severity)) errors.push(`${at}: invalid severity`);
  if (!statuses.has(finding.status)) errors.push(`${at}: invalid status`);

  if (!Array.isArray(finding.affected) || finding.affected.length === 0 || finding.affected.some(v => !nonEmptyString(v))) {
    errors.push(`${at}: affected must contain at least one non-empty string`);
  }

  if (!Array.isArray(finding.evidence) || finding.evidence.length === 0) {
    errors.push(`${at}: evidence must contain at least one item`);
  } else {
    finding.evidence.forEach((item, i) => {
      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        errors.push(`${at}: evidence[${i}] must be an object`);
        return;
      }
      if (!evidenceTypes.has(item.type)) errors.push(`${at}: evidence[${i}].type is invalid`);
      if (!nonEmptyString(item.reference)) errors.push(`${at}: evidence[${i}].reference must be non-empty`);
    });
  }

  return errors;
}

const files = await walk(root);
let errors = [];
let count = 0;

for (const file of files) {
  let parsed;
  try {
    parsed = JSON.parse(await readFile(file, 'utf8'));
  } catch (error) {
    errors.push(`${file}: invalid JSON (${error.message})`);
    continue;
  }

  const findings = Array.isArray(parsed) ? parsed : [parsed];
  findings.forEach((finding, index) => {
    count += 1;
    errors.push(...validateFinding(finding, file, Array.isArray(parsed) ? index : null));
  });
}

if (errors.length) {
  console.error(`Finding validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Validated ${count} finding(s) across ${files.length} JSON report file(s).`);
