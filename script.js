(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const siteNav = document.getElementById("site-nav");

  if (menuButton && siteNav) {
    const closeMenu = () => {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    };

    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      siteNav.classList.toggle("is-open", open);
    });

    siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const year = document.getElementById("copyright-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();