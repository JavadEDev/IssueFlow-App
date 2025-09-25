# IssueFlow

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20Project-green?style=for-the-badge)](https://issue-flow-app.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-View%20Source-blue?style=for-the-badge)](https://github.com/JavadEDev/IssueFlow-App)

![last commit](https://img.shields.io/badge/last%20commit-today-blue)
![typescript](https://img.shields.io/badge/typescript-true-blue)
![languages](https://img.shields.io/badge/languages-TS%20%7C%20SQL%20%7C%20CSS-blue)

Built with the tools and technologies:

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react)
![Tailwind%20CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss)
![Drizzle ORM](https://img.shields.io/badge/-Drizzle%20ORM-3B82F6?style=flat)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql)
![TanStack Query](https://img.shields.io/badge/-TanStack%20Query-FF4154?style=flat)
![Zod](https://img.shields.io/badge/-Zod-3068B7?style=flat)
![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?style=flat&logo=prettier)

## Overview

A modern issue tracking app built with Next.js 15 (App Router), React 19, Tailwind CSS 4, Drizzle ORM, and PostgreSQL. It includes authentication, a dashboard, marketing pages, and a full CRUD workflow for issues.

## Description

Welcome to **IssueFlow** — a lightweight, production-ready template for building issue trackers and admin dashboards. It demonstrates best practices for server actions, Suspense boundaries, incremental UI, and type-safe APIs with Zod and Drizzle.

### What You'll Find Here

- **Interactive Dashboard**: Authenticated area to create, edit, delete, and view issues by status/priority.
- **Marketing Site**: Public pages like pricing and FAQ with reusable UI components.
- **Type-safe Backend**: Zod validation and Drizzle ORM models for safe queries and schemas.
- **Auth with JWT Cookies**: Minimal auth layer using `jose`, `bcrypt`, and HTTP-only cookies.
- **DX Focus**: Strict linting, Prettier formatting, and handy `npm` scripts.

### Key Highlights

- **Next.js 15 + React 19**: Latest features with the App Router and streaming UI.
- **Server Actions & Suspense**: Fast form actions and skeleton fallbacks.
- **Postgres + Drizzle**: Typed schemas, ergonomic migrations, and a simple seed script.
- **Tailwind CSS 4**: Utility-first styling with Prettier plugin integration.
- **Testing Ready**: Vitest + Testing Library setup.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Environment Variables](#environment-variables)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Seeding](#seeding)
  - [Development](#development)
- [Features](#features)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js 18+ (or 20+ recommended)
- PostgreSQL database (local, Docker, or a hosted provider like Neon)

### Environment Variables

Create a `.env` file at the project root and set the following:

```bash
DATABASE_URL="postgres://USER:PASSWORD@HOST:PORT/DBNAME"
JWT_SECRET="your-secret-key-min-32-chars-long!!!"
NODE_ENV="development"
```

If you use Neon, copy its connection string into `DATABASE_URL`.

### Installation

```bash
npm install
```

### Database Setup

Generate and push schema to your database using Drizzle Kit:

```bash
npm run db:push
```

Optionally open Drizzle Studio to inspect data:

```bash
npm run db:studio
```

### Seeding

Seed the database with demo users and issues:

```bash
npm run seed
```

Demo accounts created by the seed script:

- Admin: `admin@example.com` / `password123`
- User: `user@example.com` / `password123`

### Development

Start the dev server (Turbopack):

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Features

- **Authentication**: Email/password sign up and sign in with JWT (HTTP-only cookies), token refresh helper, and session utilities in `lib/auth.ts`.
- **Issue Management**: CRUD API routes under `app/api/issue`, plus UI forms and validation (Zod) for creating and editing issues.
- **Dashboard**: Auth-protected pages under `app/dashboard` with loading states and skeleton components.
- **Marketing Pages**: Public routes in `app/(marketing)` like `faq` and `pricing`.
- **UI Kit**: Reusable components in `app/components` including buttons, forms, cards, skeletons, and icons.
- **Type Safety**: `lib/types.ts`, `lib/validation/*`, and Drizzle models in `db/schema.ts`.
- **Toolbox**: TanStack Query, date-fns utilities, and lightweight helpers in `lib/utils.ts`.

## Project Structure

```text
app/
  (auth)/signin, signup           Public auth pages
  (marketing)/                    Landing, pricing, FAQ
  actions/                        Server actions (auth, issues)
  api/issue                       RESTful issue endpoints
  components/                     Reusable UI components
  dashboard/                      Protected app area
  issues/                         Issue pages (new, detail, edit)
db/
  schema.ts                       Drizzle models and enums
  index.ts                        Database connection
lib/
  auth.ts, types.ts, validation/  Auth helpers, types, schemas
scripts/
  seed.ts                         Seed demo users and issues
```

## Scripts

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run db:push    # Push Drizzle schema to DB
npm run db:studio  # Open Drizzle Studio
npm run seed       # Seed database with demo data
npm run test       # Run tests (Vitest)
```

## Testing

If not already installed, add the testing stack:

```bash
npm i -D vitest @testing-library/react @testing-library/dom jsdom @vitejs/plugin-react vite-tsconfig-paths
```

Recommended Vitest setup:

```ts
// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

```ts
// vitest.setup.ts
import '@testing-library/jest-dom'
```

Run tests:

```bash
npm run test
```

Place tests alongside components or in a `__tests__` directory (e.g. `app/components/__tests__/Button.test.tsx`).

## Technologies Used

- **Framework**: Next.js 15.5 (App Router), React 19.1
- **Styling**: Tailwind CSS 4, Prettier + Tailwind plugin
- **Database/ORM**: PostgreSQL, Drizzle ORM, Drizzle Kit
- **Auth**: jose (JWT), bcrypt
- **Data**: TanStack Query, Zod validation
- **UI/Icons**: Lucide React, clsx, tailwind-merge
- **Tooling**: ESLint 9, TypeScript 5, Vitest, Testing Library

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "Add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.

---

Built with ❤️ using Next.js, React, Tailwind CSS, and Drizzle ORM.
