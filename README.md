# Tuyba Umrah Packages

A responsive Umrah package discovery site with date, duration, airport, hotel, and package filters, package details, and trip comparison.

## Requirements

- Node.js 24
- pnpm 12.5.1
- Git for Windows (provides the `sh` shell used by the workspace's pnpm lifecycle script)

## Install dependencies

Open Command Prompt in the project root and run:

```cmd
set "PATH=C:\Program Files\Git\bin;%PATH%"
pnpm install --frozen-lockfile
```

If pnpm is not installed, install it with:

```cmd
npm install --global pnpm@12.5.1
```

The application dependencies are installed from the workspace manifests and `pnpm-lock.yaml`; do not use `npm install`.

## Run the website

In the same Command Prompt window, from the project root:

```cmd
set "PORT=21346"
set "BASE_PATH=/"
pnpm --filter @workspace/tuyba-packages run dev
```

Open <http://localhost:21346/>. Leave the terminal running while using the site; press `Ctrl+C` to stop it.

## Run the API server (optional)

The website's package catalog runs in the browser and does not require the API server. To start the API, open a second Command Prompt in the project root, set `DATABASE_URL` to a PostgreSQL connection string, then run:

```cmd
set "PATH=C:\Program Files\Git\bin;%PATH%"
set "PORT=8080"
set "DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DATABASE"
pnpm --filter @workspace/api-server run build
node --enable-source-maps artifacts\api-server\dist\index.mjs
```

The API health endpoint is <http://localhost:8080/api/healthz>.

## Other workspace commands

```cmd
pnpm run typecheck
pnpm run build
```

The root workspace has no `dev` script; start the frontend with the package-filtered command above.
"# Tuyba-project" 
