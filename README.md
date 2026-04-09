# Slap

Slap is a real-time team chat and video calling app built with React, Stream, Clerk, Express, MongoDB, and Inngest. It lets signed-in users create channels, join direct messages, send messages in real time, and start Stream-powered video calls.

## Features

- Secure authentication with Clerk
- Real-time team channels and direct messages with Stream Chat
- Channel creation, member lists, invites, and pinned messages
- Stream Video calls with in-app call pages
- User synchronization between Clerk, MongoDB, and Stream via Inngest
- Sentry error and performance monitoring

## Tech Stack

- Frontend: React 19, Vite, React Router, Tailwind CSS, Stream Chat React, Stream Video React SDK
- Backend: Node.js, Express, Clerk Express, MongoDB, Inngest, Stream Chat, Sentry

## Project Structure

- `frontend/` — Vite app for the UI, auth flow, chat experience, and call pages
- `backend/` — Express API for auth-protected Stream token generation and user sync webhooks

## Requirements

- Node.js 20+ recommended
- pnpm 10+ recommended
- MongoDB database
- Clerk application
- Stream Chat and Stream Video applications
- Inngest account/configuration for Clerk user sync events

## Environment Variables

Create the following variables in the appropriate app directory.

### Backend

- `PORT`
- `MONGODB_URI`
- `NODE_ENV`
- `CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `STREAM_API_KEY`
- `STREAM_API_SECRET`
- `SENTRY_DSN`
- `INNGEST_EVENT_KEY`
- `INNGEST_SIGNING_KEY`
- `CLIENT_URL`

### Frontend

- `VITE_API_BASE_URL`
- `VITE_CLERK_PUBLISHABLE_KEY`
- `VITE_STREAM_API_KEY`
- `VITE_SENTRY_DSN`

## Getting Started

### 1. Install dependencies

```bash
cd backend && pnpm install
cd ../frontend && pnpm install
```

### 2. Configure environment variables

Add the backend env vars to `backend/.env` and the frontend vars to `frontend/.env`.

### 3. Start the backend

```bash
cd backend
pnpm run dev
```

### 4. Start the frontend

```bash
cd frontend
pnpm run dev
```

## What It Does

- The frontend authenticates users with Clerk and requests a Stream token from the backend.
- The backend validates the Clerk session, generates Stream Chat tokens, and syncs Clerk user events into MongoDB and Stream.
- The chat UI shows team channels, direct messages, message threads, and channel management tools.
- The call page creates or joins a Stream Video call using the selected call ID.

## Notes

- The backend exposes `/api/chat/token` for authenticated Stream token retrieval.
- The backend also exposes `/api/inngest` for user lifecycle events.
- For production, make sure the frontend API URL, Clerk keys, Stream keys, and Sentry DSN are all set correctly.
