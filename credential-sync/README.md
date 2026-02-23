# Credential Sync Example App

This is an example app that acts as the source of truth for Cal.com Apps credentials. This app is capable of generating the access_token itself and then syncing those to Cal.com.

> **Note:** This app was previously located at `example-apps/credential-sync` in the [cal.com monorepo](https://github.com/calcom/cal.com). It has been moved here as a standalone application.

## Setup

1. Clone this repository and navigate to this directory:
```bash
git clone https://github.com/calcom/examples.git
cd examples/credential-sync
```

2. Install dependencies:
```bash
yarn install
```

3. Copy the environment file and configure it:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
yarn dev
```

The server starts on port 5100. Open http://localhost:5100 to manage tokens for various Apps.

## Endpoints

`http://localhost:5100/api/getToken` should be set as the value of the env variable `CALCOM_CREDENTIAL_SYNC_ENDPOINT` in Cal.com.
