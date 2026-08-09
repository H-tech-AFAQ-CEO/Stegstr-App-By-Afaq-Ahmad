# Stegstr

Stegstr is a privacy-focused, open-source steganography workbench for hiding encrypted messages inside images and audio while testing how well those hidden messages survive processing by major platforms.

It brings steganography, encryption, decoding, resilience testing, Nostr connectivity, identity management, activity tracking, settings, and AI-assisted optimization together in a single secure interface.

## Features

* **Image & Audio Steganography** — Embed encrypted messages inside supported media files.
* **Message Decoding** — Extract and decode hidden messages from steganographic media.
* **Resilience Testing** — Test whether hidden data survives common transformations and processing by major platforms.
* **Encryption** — Protect messages before embedding them into media.
* **Nostr Relay Connectivity** — Connect with Nostr relays for decentralized communication and data exchange.
* **Identity Management** — Manage identities used within the Stegstr ecosystem.
* **Activity Tracking** — Monitor recent actions and steganography-related activity.
* **AI-Assisted Optimization** — Use AI-assisted techniques to help optimize hiding strategies and improve resilience.
* **Privacy Focused** — Designed with privacy and secure local workflows in mind.
* **Open Source** — Built to be transparent, inspectable, and extensible.

## Tech Stack

Stegstr is built with:

* [Next.js](https://nextjs.org)
* React
* TypeScript
* Modern web technologies
* Nostr connectivity
* AI-assisted optimization

## Getting Started

### Prerequisites

Make sure you have Node.js and a package manager such as npm, yarn, or pnpm installed.

### Install Dependencies

```bash
npm install
```

Or:

```bash
yarn install
```

Or:

```bash
pnpm install
```

### Run the Development Server

```bash
npm run dev
```

Or:

```bash
yarn dev
```

Or:

```bash
pnpm dev
```

Open http://localhost:3000 in your browser to launch Stegstr.

## Project Structure

The application is organized around the core Stegstr workbench experience, including:

* Steganography and encoding workflows
* Decoding and extraction
* Media resilience testing
* Nostr relay connectivity
* Identity management
* Activity monitoring
* Application settings
* AI-assisted optimization

## Privacy & Security

Stegstr is designed around privacy-first principles. Messages are encrypted before being hidden inside media, and the workbench provides tools for evaluating whether embedded data remains recoverable after media processing.

Users should still carefully review their deployment environment, cryptographic configuration, and operational security before using Stegstr for sensitive information.

## Open Source

Stegstr is open source and intended to provide a transparent workbench for experimenting with privacy-preserving steganography and resilience testing.

Contributions, improvements, and security reviews are welcome.

## Development

To start developing, run:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

Changes made to the application will be reflected automatically during development.

## Learn More

For more information about the technologies used by Stegstr:

* [Next.js Documentation](https://nextjs.org/docs)
* [Next.js Learn](https://nextjs.org/learn)
* [Nostr Documentation](https://nostr.com)
