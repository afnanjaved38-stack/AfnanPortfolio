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

  // Send useful conversion events only when a real analytics provider is configured.
  // No data is transmitted by this code on its own.
  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href") || "";
    let eventName = "";

    if (href.startsWith("mailto:")) eventName = "email_click";
    else if (href.includes("linkedin.com/in/TheAfnanJaved")) eventName = "linkedin_click";
    else if (href.includes("instagram.com/theafnanjaved")) eventName = "instagram_click";
    else if (href.includes("dinaaro.com")) eventName = "dinaaro_click";
    else if (href.includes("switchpowersa.com") || href.includes("nexustech.pk")) eventName = "client_project_click";

    if (!eventName) return;

    link.addEventListener("click", () => {
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, {
          link_url: href,
          link_text: (link.textContent || "").trim().slice(0, 80)
        });
      }
    });
  });

  const year = document.getElementById("copyright-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();