document.addEventListener("DOMContentLoaded", () => {
  const projects = Array.isArray(window.portfolioProjects) ? window.portfolioProjects : [];

  const makeCard = (project) => {
    const card = document.createElement("article");
    card.className = "project-card";
    const tags = (project.technologies || []).map((technology) => `<li class="tag">${technology}</li>`).join("");
    const launch = project.liveUrl ? `<a class="button button-primary" href="${project.liveUrl}" target="_blank" rel="noopener" aria-label="Launch ${project.name}">Launch ↗</a>` : `<span class="repository-only">Repository Only</span>`;
    card.innerHTML = `<div class="project-card-title"><span class="project-icon" aria-hidden="true">▣</span><span>${project.name}.exe</span></div><div class="project-card-body"><p>${project.description}</p><ul class="tag-list" aria-label="Technologies">${tags}</ul><div class="card-actions">${launch}<a class="button" href="${project.repositoryUrl}" target="_blank" rel="noopener" aria-label="View source for ${project.name}">View Source ↗</a></div></div>`;
    return card;
  };

  const featured = document.querySelector("#featured-projects");
  if (featured) projects.filter((project) => project.featured).slice(0, 3).forEach((project) => featured.append(makeCard(project)));

  const allProjects = document.querySelector("#all-projects");
  const count = document.querySelector("#project-count");
  if (!allProjects) return;
  const render = (filter = "all") => {
    const visible = filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter));
    allProjects.replaceChildren(...visible.map(makeCard));
    count.textContent = `${visible.length} project${visible.length === 1 ? "" : "s"} found.`;
  };
  document.querySelectorAll(".filter-button").forEach((button) => button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    render(button.dataset.filter);
  }));
  render();
});
