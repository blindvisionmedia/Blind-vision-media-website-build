#!/usr/bin/env node

import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.argv[2] ?? '.';
const ignoredDirectories = new Set(['.git', 'node_modules', '.next', 'dist', 'build', 'coverage']);
const maxBytes = 2 * 1024 * 1024;

const patterns = [
  ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/g],
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g],
  ['Stripe live secret', /\bsk_live_[A-Za-z0-9]{16,}\b/g],
  ['Private key', /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{35}\b/g]
];

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

const findings = [];

for (const file of await walk(root)) {
  const info = await stat(file);
  if (info.size > maxBytes) continue;

  let text;
  try {
    text = await readFile(file, 'utf8');
  } catch {
    continue;
  }

  if (text.includes('\u0000')) continue;

  for (const [name, pattern] of patterns) {
    pattern.lastIndex = 0;
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const line = text.slice(0, match.index).split('\n').length;
      findings.push(`${file}:${line}: possible ${name}`);
    }
  }
}

if (findings.length) {
  console.error('Potential secret material detected:');
  for (const finding of findings) console.error(`- ${finding}`);
  console.error('Do not commit real credentials. Rotate any credential that has already been exposed.');
  process.exit(1);
}

console.log('No high-confidence secret patterns detected.');
