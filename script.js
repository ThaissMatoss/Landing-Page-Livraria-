// --- MENU MOBILE ---
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

// --- SPARKLES ---
const container = document.getElementById("sparkleText");

function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  // posição aleatória dentro do texto
  sparkle.style.left = Math.random() * container.offsetWidth + "px";
  sparkle.style.top = Math.random() * container.offsetHeight + "px";

  // tempo de delay aleatório
  sparkle.style.animationDelay = Math.random() * 2 + "s";

  container.appendChild(sparkle);

  // remove depois de um tempo
  setTimeout(() => sparkle.remove(), 2000);
}

// cria sparkles de tempo em tempo
setInterval(createSparkle, 300);
