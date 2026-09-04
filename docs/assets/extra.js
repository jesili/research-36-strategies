document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".md-sidebar--primary .md-nav__link").forEach((link) => {
    const label = link.textContent.trim();
    if (label && !link.title) link.title = label;
  });
});
