# Cal.com Platform Example App

A standalone example app demonstrating [Cal.com Atoms](https://cal.com/docs/platform/atoms) — customizable UI components to integrate scheduling into your product.

This app uses the published [`@calcom/atoms`](https://www.npmjs.com/package/@calcom/atoms) npm package.

## Prerequisites

Cal.com's backend (API v2) is required to run this example app. Clone [cal.com](https://github.com/calcom/cal.com) and follow the setup instructions in its README.

You will need:
- Cal.com API v2 running locally (default: `http://localhost:5555/api/v2`)
- Cal.com web app running locally (default: `http://localhost:3000`)
- Google API credentials configured ([instructions](https://github.com/calcom/cal.com?tab=readme-ov-file#obtaining-the-google-api-credentials))

## Setup

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Create a Platform OAuth client:
   - Open `http://localhost:3000/` and login with `admin@example.com` / `ADMINadmin2022!`
   - Navigate to `http://localhost:3000/settings/organizations/new` and create a sample organization (verification code: `111111`)
   - Navigate to `http://localhost:3000/settings/organizations/platform/oauth-clients` and create a new OAuth client with all permissions. Set the redirect URI to `http://localhost:4321`.

3. Configure environment:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set:
   - `NEXT_PUBLIC_X_CAL_ID` — your OAuth client ID from step 2
   - `X_CAL_SECRET_KEY` — your OAuth client secret from step 2
   - `NEXT_PUBLIC_CALCOM_API_URL` — your API v2 URL (default: `http://localhost:5555/api/v2`)

4. Set up the local database:
   ```bash
   rm -f prisma/dev.db && yarn prisma db push
   ```

5. Start the app:
   ```bash
   yarn dev
   ```
   Open `http://localhost:4321`.

6. (Optional) For Google Calendar integration, add `http://localhost:5555/v2/gcal/oauth/save` to the authorized redirect URIs in Google Cloud Console.

## OAuth 2.0 Mode

See [README-OAUTH2.MD](./README-OAUTH2.MD) for instructions on running with an OAuth 2.0 client instead of a Platform OAuth client.

## Running E2E Tests

```bash
yarn test:e2e
```

See `playwright.config.ts` for configuration details.

