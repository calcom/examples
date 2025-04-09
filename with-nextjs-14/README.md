# Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Follow these steps to set up and run the project:

### 1. Install Dependencies
Run the following command to install the required dependencies:
```bash
bun install
```

### 2. Set Up Environment Variables
Copy the example `.env` file and configure it:
```bash
cp .env.example .env
```

Update the `.env` file with the following values:
- **Database URL**: Set the `DATABASE_URL` (uses SQLite by default):
  ```env
  DATABASE_URL="your_database_url"
  ```
- **Cal.com API Keys**: Follow the [Quickstart Guide](https://cal.com/docs/platform/quickstart) to set:
  ```env
  NEXT_PUBLIC_X_CAL_ID="your_cal_id"
  X_CAL_SECRET_KEY="your_secret_key"
  ```

### 3. Run the Development Server
Start the development server with:
```bash
bun dev
```

### 4. Open in Browser
Visit [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---
Happy coding!

