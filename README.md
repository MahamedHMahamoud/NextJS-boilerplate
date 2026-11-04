# Next.js and MUI boilerplate

A minimal starter with the Next.js Pages Router and Material UI: a shared layout with header and footer, and an empty home page to build from.

| Package | Version |
| --- | --- |
| Next.js | 16 |
| React | 19 |
| Material UI | 9 |

Requires Node.js 20.9 or newer.

## Getting started

```bash
git clone https://github.com/MahamedHMahamoud/NextJS-boilerplate.git
cd NextJS-boilerplate
npm install
npm run dev
```

Open http://localhost:3000. The page reloads as you edit.

## Project structure

| Path | What it does |
| --- | --- |
| `pages/index.js` | Home page, start here |
| `pages/_app.js` | Wraps every page in the layout |
| `pages/api/hello.js` | Example API route at `/api/hello` |
| `comp/general/` | `Layout`, `Header` and `Footer` |
| `styles/` | CSS files, not imported by default |
| `public/` | Static files |

Imports can use the `@/` alias for the project root, for example `@/comp/general/Layout`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Runs the production build |

## Keeping it secure

Run `npm audit` before starting a project from this template, and update with `npm update`.

## License

GPL-3.0, see [LICENSE](LICENSE).
