# Stegstr

## Privacy-first media steganography workbench

Stegstr is an open-source, local-first steganography workbench for hiding encrypted messages inside ordinary media and evaluating whether those carriers survive real-world platform processing. It combines an image-first encoding workflow, decoding and inspection tools, platform survival testing, Nostr relay concepts, identity controls, and a technical activity dashboard in one focused interface.

**Project author:** Afaq Ahmad

> Stegstr is designed for privacy research, defensive experimentation, education, and authorized communication. Do not use it to conceal unlawful activity or to bypass platform safety controls.

## Features

### Workbench

- **Encode message** — Select an image or audio carrier, write a payload, choose a target platform, review capacity/readiness metrics, and create a local demo artifact.
- **Decode carrier** — Load a carrier, scan for an embedded payload, inspect recovery status, and copy recovered content.
- **Resilience lab** — Run platform-oriented survival checks for WhatsApp, Telegram, Instagram, direct relay delivery, and other processing conditions.

### Nostr networking

- **Nostr relays** — Review relay health, delivery status, event previews, and relay-oriented workflow states.
- **Identity** — Inspect the local identity surface, NIP-07 browser extension availability, key-management states, and signing controls.
- **Activity log** — Review recent encode, decode, test, and relay activity in a compact operational timeline.

### System

- **Settings** — Configure local-first behavior, metadata handling, automatic resilience checks, and privacy-oriented preferences.
- **Help & docs** — Learn the Stegstr workflow, understand platform survival, and review the project’s technical boundaries.

## Current implementation model

The interface is intentionally local-first. Carrier selection, preview state, readiness calculations, resilience feedback, downloads, and identity/relay presentation are handled in the browser demo workflow. The Neon database is provisioned for persistent run and relay-event metadata as the application grows into authenticated storage-backed flows.

The current database tables are:

- `public.stegstr_runs` — encode, decode, and resilience run metadata, platform, carrier details, payload/capacity values, status, and JSON results.
- `public.stegstr_relay_events` — relay activity, event kind, relay URL, event JSON, and timestamps.

The canonical SQL is available in [`db/schema.sql`](./db/schema.sql). The connected Neon database schema has been applied and checked.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React icons
- Neon Postgres for persistence
- Responsive single-theme technical interface

## Routes

| Route | Purpose |
| --- | --- |
| `/encode` | Encode a message into a carrier |
| `/decode` | Decode and inspect a carrier |
| `/resilience` | Test carrier survival across platform conditions |
| `/relays` | Review Nostr relay connectivity and events |
| `/identity` | Manage identity and signing states |
| `/activity` | Review local activity history |
| `/settings` | Configure privacy and processing preferences |
| `/help` | Read product guidance and documentation |

## Getting started

### Requirements

- Node.js 20 or newer
- pnpm
- A Neon project and `DATABASE_URL` for storage-backed development

### Install dependencies

```bash
pnpm install
```

### Configure environment variables

Create `.env.local` with the database connection string supplied by the Neon integration:

```env
DATABASE_URL=your_neon_database_url
```

Do not commit `.env.local` or any credential file. In managed Vercel environments, configure variables through the project environment settings.

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000), then visit `/encode` or any route in the table above.

### Production build

```bash
pnpm build
pnpm start
```

### Quality checks

```bash
pnpm lint
```

## Database setup

The SQL schema is stored in `db/schema.sql` and defines the Stegstr application tables. The Neon integration is the source of truth for applying and inspecting SQL changes. Keep schema changes additive and review them before applying them to a shared database.

All future application queries that touch user-owned data must scope records by the authenticated user identifier. Do not expose relay events or run metadata across users, and never store private keys, seed phrases, passwords, or raw sensitive payloads in plain text.

## Privacy and security notes

- Treat carrier files and recovered payloads as sensitive data.
- Prefer browser-local processing for media whenever possible.
- Strip metadata only when the workflow explicitly requests it; metadata can affect platform survival and forensic analysis.
- Never log message contents, private keys, seed phrases, or credentials.
- Use NIP-07 or another approved signer rather than exposing private keys to application code.
- Validate file type, file size, payload size, and platform constraints before processing.
- Recompute and validate any server-side values before persistence.
- Use parameterized database queries through the project’s database layer.

## Project structure

```text
app/
  page.tsx                 # Encode entry route
  [...slug]/page.tsx       # Dedicated feature routes
  layout.tsx               # Metadata, viewport, and global shell
  globals.css              # Stegstr theme and responsive styles
components/
  stegstr-app.tsx          # Shared shell and feature surfaces
  ui/                      # Reusable UI primitives
db/
  schema.sql               # Neon SQL schema
public/
  stegstr-mark.svg         # Stegstr favicon/brand mark
```

## Development guidance

When adding a feature:

1. Keep the feature inside the existing Stegstr visual system.
2. Give major navigation items their own route.
3. Keep workflows accessible with keyboard and clear labels.
4. Add or update SQL before writing code that depends on a new table.
5. Scope persistent queries to the current user.
6. Avoid persisting raw secrets or unencrypted payloads.
7. Run the production build and verify the route in a browser before merging.

## License

No license has been declared yet. Add a project license before distributing Stegstr outside the development team.

## Author

Built and maintained by **Afaq Ahmad**.
