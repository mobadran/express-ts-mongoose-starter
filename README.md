# Express + TypeScript + Mongoose Starter

A clean and modern boilerplate for building Node.js APIs with **Express**, **TypeScript**, and **MongoDB (via Mongoose)**. Includes TypeScript support, ESLint + Prettier, environment configuration, and a recommended folder structure.

---

## Features

- TypeScript ready (`strict` mode enabled)
- Express.js API boilerplate
- Mongoose connection and typed models
- ESLint + Prettier integration for consistent code style
- `.env` support for configuration
- Standard project folder structure

---

## Folder Structure

```
my-express-app/
│
├─ src/
│   ├─ controllers/       # Route controllers
│   ├─ routes/            # Route definitions
│   ├─ models/            # Mongoose models
│   ├─ middleware/        # Middleware (auth, error handling, etc.)
│   ├─ utils/             # Utility functions/helpers
│   ├─ config/            # Database/config files
│   ├─ app.ts             # Express app setup
│   └─ server.ts          # Entry point
│
├─ dist/                  # Compiled JS output
├─ tsconfig.json          # TypeScript config
├─ package.json
├─ .eslintrc.json         # ESLint config
├─ .prettierrc            # Prettier config
├─ .env                   # Environment variables (ignored by git)
└─ .gitignore
```

---

## Installation

1. Clone the repository:

```bash
git clone <repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
pnpm install
# or npm install / yarn install
```

3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mydatabase
```

---

## Scripts

```json
"scripts": {
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "lint": "eslint 'src/**/*.{ts,tsx}'",
  "lint:fix": "eslint 'src/**/*.{ts,tsx}' --fix",
  "format": "prettier --write 'src/**/*.{ts,tsx,js,json,md}'"
}
```

- `dev` → Run in development mode with auto-reload.
- `build` → Compile TypeScript to `dist/`.
- `start` → Run production build.
- `lint` / `lint:fix` → Check/fix linting errors.
- `format` → Format code with Prettier.

---

## Usage

Start the development server:

```bash
pnpm run dev
# or npm run dev / yarn dev
```

Server should start on the port defined in `.env`.

---

## Contributing

This is a template for your own projects. Feel free to fork and modify as needed.

---

## License

MIT License © Badraan
