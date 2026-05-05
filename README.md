# drojasra-33 
Grunge is a portfolio Astro theme with a grunge aesthetic, perfect for developers, designers and any other creative who wants to stand out and show their love for the 90s music scene.

- [**Live Demo**](https://grunge.pages.dev) 
- [**Changelog**](https://jessgaspar.dev/changelog/grunge) 

## Tech stack
- Astro v6
- Tailwind v4
- JavaScript
- TypeScript

## Pages
- Home
- Works
- Individual Work
- About
- Contact
- 404

## Features
- Content collections
- Reusable components
- Tailwind theme
- Pagination
- SEO setup
- Sitemap
- Ongoing updates

If you have any questions, feel free to reach out:
- [Bluesky](https://bsky.app/profile/gasparjs.bsky.social)
- [jessgaspardev@gmail.com](mailto:jessgaspardev@gmail.com)


## 🚀 Project Structure

Inside of your template, you'll see the following folders and files:

---
/
├── public/
│   └── favicon.svg

├── src/
│
│   ├── assets/
│   │   ├── images/
│   │   ├── ui/
│   │   └── work-card/
│
│   ├── components/
│   │   ├── elements/
│   │   │   ├── Container.astro
│   │   │   ├── ContainerBottom.astro
│   │   │   ├── Heading.astro
│   │   │   ├── ImageContainer.astro
│   │   │   ├── Link.astro
│   │   │   ├── Text.astro
│   │   │   ├── Dropdown.astro
│   │   │   ├── ResumeDropdown.astro
│   │   │   └── Work.astro
│   │
│   │   ├── global/
│   │   │   ├── BaseHead.astro
│   │   │   ├── Seo.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   └── Wrapper.astro
│   │
│   │   ├── sections/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── home/
│   │   │   └── works/
│   │   │       ├── Pagination.astro
│   │   │       └── Works.astro
│
│   ├── content/              ✅ (AQUÍ van tus proyectos)
│   │   └── works/
│   │       ├── hp-inc-sla-delivopt.md
│   │       └── otro-proyecto.md
│
│   ├── layouts/
│   │   └── Layout.astro
│
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   └── works/
│   │       ├── [...page].astro   ✅ paginación
│   │       └── [slug].astro      ✅ detalle
│
│   ├── styles/
│   │   ├── global.css
│   │   └── markdown.css
│
│   └── content.config.ts

├── astro.config.ts
├── tsconfig.json
├── package.json
├── README.md
└── .gitignore


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

