document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === `${page === "home" ? "index" : page}.html`) link.setAttribute("aria-current", "page");
  });
  document.querySelectorAll("[data-current-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
});
