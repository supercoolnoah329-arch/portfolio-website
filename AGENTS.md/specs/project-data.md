# Project Data Specification

## Storage decision

Store the portfolio's project list in one editable JavaScript file:

`data/projects.js`

The file defines `window.portfolioProjects`, which the site reads to render project cards on the Projects page. The Home page uses the same data and displays only projects marked `featured: true`.

This keeps project information in one place, prevents duplicated content, and works when the site is opened directly from a computer without a local server.

## Data shape

```js
window.portfolioProjects = [
  {
    "id": "project-slug",
    "name": "Project Name",
    "description": "A short, plain-language description of the project.",
    "categories": ["website", "app"],
    "technologies": ["HTML", "CSS", "JavaScript"],
    "repositoryUrl": "https://github.com/supercoolnoah329-arch/repository-name",
    "liveUrl": "https://example.github.io/project-name/",
    "image": "assets/projects/project-slug.png",
    "icon": "assets/icons/default-project.svg",
    "featured": false,
    "status": "complete"
  }
];
```

## Field rules

| Field | Required | Rule |
| --- | --- | --- |
| `id` | Yes | Unique lowercase slug; use letters, numbers, and hyphens only. |
| `name` | Yes | Human-readable project name. |
| `description` | Yes | One or two sentences; explain the result, not just the technology. |
| `categories` | Yes | One or more of `website`, `app`, `game`, or `tool`. |
| `technologies` | No | Short labels displayed as tags. |
| `repositoryUrl` | Yes | Public GitHub repository URL. |
| `liveUrl` | No | Leave empty or omit when the project has no live version. |
| `image` | No | Relative image path; omit when no screenshot is available. |
| `icon` | No | Relative icon path; use default project icon if omitted. |
| `featured` | Yes | `true` for projects shown on the homepage. |
| `status` | Yes | One of `complete`, `in-progress`, or `archived`. |

## Initial content process

1. Review repositories from `supercoolnoah329-arch`.
2. Add only projects Noah wants in the portfolio.
3. Write a clear description, then add the repository and live URLs.
4. Add a screenshot when it improves understanding.
5. Mark up to three projects as featured.
