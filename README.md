# German-Italian Young Voices - Landingpage

## Tools

- TailwindCSS v3.3
- AstroJs v3
- AstroI18N
- StrapiCMS v4

## 🚀 Quick start

1. **Clone the repository.**

   ```sh
   git clone
   ```

2. **Install dependencies.**

   ```sh
   npm install
   ```

3. **Define the environment variables.**

   ```sh
   cp .env.example .env
   ```

   Then open the `.env` file and set the `STRAPI_TOKEN`, `STRAPI_URL` and `RECAPTCHA_SECRET` environment variables to the correct values.

   ```sh
    STRAPI_TOKEN=https://api.example.com
    STRAPI_URL=https://api.example.com
    RECAPTCHA_SECRET=
   ```

   Replace `https://api.example.com` with the correct value.

4. **Start the development server.**

   ```sh
    npm run dev
   ```

5. **Open the source code and start editing!**

   Your site is now running at `http://localhost:4321`!

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run i18n:sync`    | Syncs i18n locales                               |
