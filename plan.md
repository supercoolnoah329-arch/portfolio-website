# Portfolio Website Plan

## Goal

Create Noah's personal portfolio site: a playful, retro-computing showcase for the projects he builds and the creative work behind WeZePlay.

## Primary visitor flow

1. The visitor lands on a Windows 98-style **Welcome** window.
2. It gives a short introduction to Noah.
3. The main call to action is **View My Projects**.
4. A secondary **About Me** button gives more personal and creative context.

## Homepage introduction

> Hi, I’m Noah. An aspiring YouTuber and builder. I make funny, high-energy videos and create projects I’m proud to share.

## Visual system

- **Theme:** Windows 98 Energy, inspired by the WeZePlay channel’s Windows 98 startup-screen branding.
- **Heading font:** Press Start 2P.
- **Body font:** VT323.
- **Primary colors:** navy `#000080`, gray `#C0C0C0`, white `#FFFFFF`, cyan `#00A2E8`, and green `#008000`.
- Use retro window frames, title bars, beveled controls, and buttons, while keeping the layout responsive and readable.
- Full design guidance: [Brand Guidelines](../../Design/brand-guidelines.md).

## Technical approach

- Plain HTML, CSS, and JavaScript.
- No build step, framework, package manager, compiler, or bundler.
- Files should work directly in a browser and deploy unchanged to GitHub Pages.

## Projects section

Show every GitHub project as a Windows 98-style program window/card.

Each card includes:

- A title bar with project name and small icon.
- Optional screenshot or preview.
- One- or two-sentence description in plain language.
- Technology tags when known.
- **Launch** button for the live site, when available.
- **View Source** button for the GitHub repository.
- **Repository Only** label when no live site is available.

## Project source

- GitHub account: [supercoolnoah329-arch](https://github.com/supercoolnoah329-arch)
- The site should list all relevant projects from this account and retain both repository and live links.
- The eventual implementation should use a maintainable project-data source so new projects can be added easily.

## Open decisions

- Final page list beyond Home, Projects, and About.
- Whether the project list is manually curated, fetched from GitHub, or both.
- Contact method and social links.
- Hosting and deployment choice.
- Project screenshots, descriptions, and technology tags.

## Implementation specifications

- [Pages and Layout](AGENTS.md/specs/pages-and-layout.md)
- [Project Data](AGENTS.md/specs/project-data.md)
- [File Structure](AGENTS.md/specs/file-structure.md)
