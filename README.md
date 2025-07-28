# val

[中文](./README.zh.md) | English

A modern monorepo template project based on Turborepo.

## Tech Stack

- [x] [Bun](https://bun.sh) - Fast JavaScript runtime and package manager
- [x] [Turborepo](https://turborepo.com/) - High-performance monorepo build system
- [x] [Biome.js](https://biomejs.dev/) - Code formatting and linting tool (Zero-configuration provided by [Ultracite](https://www.ultracite.ai/))
- [x] [Next.js](https://nextjs.org/) - React full-stack framework
- [x] [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [x] [shadcn/ui](https://ui.shadcn.com) - Customizable UI component library

## Project Structure

```
.
├── apps/
│   └── web/              # Next.js application
├── packages/             # Shared packages
└── turbo.json           # Turborepo configuration
```

## Quick Start

### Install Dependencies

```bash
bun install
```

### Development

```bash
bun dev
```

### Build

```bash
bun build
```

### Install UI Components

```bash
cd apps/web
bunx shadcn@canary add [component-name]
```

## Scripts

- `bun dev` - Start development server
- `bun build` - Build all apps and packages
- `bun lint` - Run code linting
- `bun format` - Format code
