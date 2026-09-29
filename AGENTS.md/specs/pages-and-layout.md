# Pages and Layout Specification

## Site-wide shell

Every page uses a Windows 98-style desktop background with a centered main application window.

- **Top title bar:** site name, `WeZePlay Portfolio`, and decorative minimize/maximize/close controls.
- **Navigation:** Home, Projects, About, and Contact links styled as classic menu items or buttons.
- **Main content:** one or more retro program windows with beveled borders and title bars.
- **Footer/status bar:** a short status message such as `Ready.` plus copyright/year.
- **Responsive behavior:** on small screens, windows become full-width and project cards stack in one column.

## Home (`index.html`)

### Purpose

Introduce Noah quickly and lead visitors to the projects list.

### Layout

1. **Welcome window**
   - Title: `Welcome.exe`
   - Short portfolio introduction.
   - Primary button: **View My Projects** → `projects.html`
   - Secondary button: **About Me** → `about.html`
2. **Quick links window**
   - GitHub profile link.
   - WeZePlay/YouTube link when provided.
3. **Featured projects window**
   - Show up to three selected project cards from `data/projects.js`.

## Projects (`projects.html`)

### Purpose

Give visitors a complete, easy-to-scan view of Noah's GitHub projects.

### Layout

1. **Projects index window**
   - Heading: `My Projects`
   - One sentence explaining that the projects are built by Noah.
   - Optional filter buttons: All, Websites, Apps, Games, Tools.
2. **Project card grid**
   - Two cards per row on desktop, one per row on small screens.
   - Cards are rendered from `data/projects.js`.

### Project card anatomy

```text
┌─ [icon] Project Name.exe ────────────────── □ ✕ ┐
│ [Optional screenshot]                            │
│ Short description of what the project does.      │
│ [HTML] [CSS] [JavaScript]                        │
│                                                    │
│ [ Launch ]              [ View Source ]           │
└──────────────────────────────────────────────────┘
```

- The **Launch** button is visible only when `liveUrl` exists.
- When no `liveUrl` exists, show a `Repository Only` status label instead.
- External links open in a new tab and have clear accessible labels.

## About (`about.html`)

### Purpose

Share Noah's personal and creative identity behind the work.

### Layout

1. **About Noah window**
   - Creative gamer, aspiring YouTuber, and project builder.
   - WeZePlay content: SRB2 gameplay edits, skits, showcases, and high-energy humor.
2. **Creative influences window**
   - Argin and Cheeb.
   - Interest in stylish gameplay, memorable moments, and entertaining edits.
3. **Now Playing / Current Goal window**
   - Optional small personal detail, such as working toward UCN 50/20 mode.

## Contact (`contact.html`)

### Purpose

Give visitors a simple way to find Noah online.

### Layout

- A contact window with GitHub and future social/contact links.
- Do not include a form until Noah chooses an email address or form service.
