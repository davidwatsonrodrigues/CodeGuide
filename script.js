const platforms = [
  {
    name: "GitHub",
    url: "https://github.com/",
    tutorial: "https://docs.github.com/en",
    image: "assets/github.png"
  },
  {
    name: "Replit",
    url: "https://replit.com/",
    tutorial: "https://docs.replit.com/",
    image: "assets/replit.png"
  },
  // Adicione mais aqui...
];

const langSelector = document.getElementById("language-selector");
const platformList = document.getElementById("platform-list");
const searchInput = document.getElementById("search");

function renderPlatforms(filter = "") {
  platformList.innerHTML = "";
  platforms
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" width="100"/>
        <h2>${p.name}</h2>
        <a href="${p.url}" target="_blank">Acessar Plataforma</a><br>
        <a href="${p.tutorial}" target="_blank">Ver Tutorial</a>
      `;
      platformList.appendChild(card);
    });
}

searchInput.addEventListener("input", (e) => {
  renderPlatforms(e.target.value);
});

renderPlatforms();
