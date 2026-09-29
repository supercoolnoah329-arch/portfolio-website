# File Structure Specification

## Chosen implementation

A static HTML, CSS, and JavaScript site with **no build step**. There is no framework, package manager, compiler, or bundler. The files can be opened directly in a browser and deployed unchanged to GitHub Pages.

## Required files

```text
portfolio-website/
├── index.html                    # Home / welcome page
├── projects.html                 # Complete project list
├── about.html                    # Personal and creative context
├── contact.html                  # Public links and contact options
├── README.md                     # Project overview and setup notes
├── css/
│   ├── reset.css                 # Small browser-default reset
│   ├── tokens.css                # Colors, fonts, spacing, and shared variables
│   ├── components.css            # Windows, buttons, cards, tags, and navigation
│   └── main.css                  # Page layouts and responsive rules
├── js/
│   ├── main.js                   # Shared navigation and small interface behavior
│   └── projects.js               # Loads data and renders project cards/filters
├── data/
│   └── projects.js               # Single source of truth for portfolio projects
└── assets/
    └── projects/                 # Optional folder for project screenshots
```

## Asset rules

- Use `assets/projects/<project-id>.png` for optional project screenshots.
- Optimize screenshots before adding them; prefer WebP or PNG at practical dimensions.
- Use original assets or assets Noah has permission to use.
- Keep external fonts loaded from Google Fonts until the site needs an offline font setup.

## Files not needed for version one

- No database.
- No server/API.
- No account system.
- No contact form service until a contact method is chosen.
- No Node.js, npm, package file, framework, compiler, or bundler.
