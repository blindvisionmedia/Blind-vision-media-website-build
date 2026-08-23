# Blind Vision Media — Lovable Build

This repository is reserved for the current Blind Vision Media website and client platform being built in Lovable.

## Current baseline

The previous standalone scaffold and repository-level agent/control system have been removed from `main` so the Lovable project can become the clean application baseline.

The pre-cleanup repository state is preserved on:

`archive/pre-lovable-cleanup-2026-08-23`

## Build workflow

- Plan, write, review, and approve product decisions before implementation.
- Lovable is the active application builder.
- Once GitHub sync is connected, the Lovable application code belongs in this repository.
- GitHub is the durable history, review, CI, and rollback layer.
- Do not restore the old standalone website scaffold into `main`.

## Agent team

The Blind Vision agent team has been supplied to Lovable as a Workspace Skill. It should not be duplicated into the application repository unless specific CI, policy, or documentation files are intentionally added later.

## Security

Never commit secrets, API keys, passwords, private keys, service-role credentials, production tokens, or private client/artist data.
