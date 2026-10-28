const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

if (menuButton && mobileNav) {
  const closeMenu = () => {
    mobileNav.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  };

  menuButton.addEventListener("click", () => {
    const shouldOpen = mobileNav.hidden;
    mobileNav.hidden = !shouldOpen;
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    menuButton.setAttribute("aria-label", shouldOpen ? "Close navigation" : "Open navigation");
  });

  mobileNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

const copyrightYear = document.getElementById("copyright-year");
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();
