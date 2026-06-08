const sectionCards = [
  {
    title: "Projects",
    href: "projects.html",
    icon: "spark",
    summary: "Small tools, experiments, prototypes, and things that helped me understand the world by making a piece of it.",
  },
  {
    title: "Photography",
    href: "photography.html",
    icon: "lens",
    summary: "Light, walks, people, tiny scenes, and the quiet evidence that I was paying attention.",
  },
  {
    title: "Field Notes",
    href: "field-notes.html",
    icon: "note",
    summary: "Loose observations, learning logs, sketches of ideas, and the thoughts that want somewhere to land.",
  },
];

const iconMap = {
  spark: "*",
  lens: "o",
  note: "fn",
};

function renderCards() {
  const mount = document.querySelector("[data-section-cards]");
  if (!mount) return;

  mount.innerHTML = sectionCards
    .map((card, index) => `
      <a class="path-card" href="${card.href}">
        <div class="card-top">
          <span class="card-icon" aria-hidden="true">${iconMap[card.icon]}</span>
          <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
        </div>
        <div>
          <h3>${card.title}</h3>
          <p>${card.summary}</p>
        </div>
        <span class="card-arrow" aria-hidden="true">open -></span>
      </a>
    `)
    .join("");
}

function setCurrentNav() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      link.setAttribute("aria-current", "page");
    }
  });
}

function setFooterYear() {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

renderCards();
setCurrentNav();
setFooterYear();
