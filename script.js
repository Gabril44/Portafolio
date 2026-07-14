const projects = [
  {
    title: "Pokev Storefront",
    year: "2026",
    type: "web",
    role: "store / admin / UX",
    featured: true,
    image: "assets/pokev-web.png",
    description:
      "Web para venta de cartas con consulta por WhatsApp, secciones de trades, subastas, comunidad y panel administrativo en espanol.",
    tags: ["Live site", "HTML", "CSS", "JS", ".NET", "ARS/USD"],
    link: "https://pokev.runasp.net",
    linkLabel: "Ver web"
  },
  {
    title: "Apps para negocios",
    year: "archivo",
    type: "apps",
    role: "desktop / mobile / admin tools",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    description:
      "Apps de escritorio y celular para negocios reales: gimnasios, spa, gestion de clientes, turnos, servicios y flujos internos.",
    tags: ["Business apps", "Admin tools", "Desktop", "Mobile"]
  },
  {
    title: "KIWI RPG",
    year: "2026",
    type: "games",
    role: "Love2D / narrative systems",
    featured: true,
    image: "assets/kiwi-menu.png",
    gallery: [
      {
        image: "assets/kiwi-red-world.png",
        label: "Red World / exploracion"
      },
      {
        image: "assets/kiwi-blue-world.png",
        label: "Blue World / encuentro"
      },
      {
        image: "assets/kiwi-combat.png",
        label: "Combat system"
      }
    ],
    description:
      "Juego RPG en Lua/Love2D con menu propio, exploracion por mundos, HUD, dialogos, combate con parry/patadas y estructura preparada para seguir creciendo.",
    tags: ["Lua", "Love2D", "RPG", "Combat", "HUD", "World states"]
  },
  {
    title: "Morrowvale",
    year: "2023",
    type: "minecraft",
    role: "Addon Developer / Marketplace",
    featured: true,
    image: "assets/morrowvale.png",
    description:
      "Addon publicado en Marketplace inspirado en las historias de 555 Comic. Incluye 3 boss fights, items y habilidades custom, nuevos personajes y 10 quests. Realizado con Fineblock Team.",
    tags: ["Marketplace", "Boss fights", "Custom items", "Fineblock Team"],
    link: "https://ruddy-lettuce-918.notion.site/Morrowvale-30db731f8e79818aa079e9ebdb8ace75"
  },
  {
    title: "LuckyWars",
    year: "2023",
    type: "minecraft",
    role: "Addon Developer / Trailer Maker",
    featured: false,
    image: "https://img.youtube.com/vi/DjGjUPMqPkg/hqdefault.jpg",
    description:
      "Mapa publicado en Marketplace. Trabajo en lucky blocks, modelos de miniatura, comportamientos y trailer: captura, armado y edicion.",
    tags: ["Marketplace", "Lucky blocks", "Behaviors", "Trailer"],
    link: "https://www.youtube.com/watch?v=DjGjUPMqPkg"
  },
  {
    title: "Sci-fi Skyland",
    year: "2023",
    type: "minecraft",
    role: "Addon Developer",
    featured: false,
    image: "assets/sci-fi-skyland.png",
    description:
      "Mapa publicado en Marketplace con trabajo de addon sobre modelos y comportamientos para 3 NPCs y 1 boss.",
    tags: ["Marketplace", "NPCs", "Boss", "Behaviors"],
    link: "https://ruddy-lettuce-918.notion.site/Sci-fi-Skyland-310b731f8e7980b0a406e283448c2e79"
  },
  {
    title: "Scape in 60 Minutes",
    year: "2023",
    type: "minecraft",
    role: "Trailer Maker",
    featured: false,
    image: "https://img.youtube.com/vi/BQMaWziobjs/hqdefault.jpg",
    description:
      "Mapa publicado en Marketplace. Trabajo audiovisual centrado en captura, direccion de tomas y edicion del trailer.",
    tags: ["Marketplace", "Trailer", "Capture", "Editing"],
    link: "https://youtu.be/BQMaWziobjs"
  },
  {
    title: "Fall Caramel Latte",
    year: "2023",
    type: "minecraft",
    role: "Skin Pack",
    featured: false,
    image: "assets/fall-caramel-latte.png",
    description:
      "Skin pack publicado en Marketplace con 6 skins de estetica otoñal. Primer pack de skins realizado dentro del recorrido profesional.",
    tags: ["Marketplace", "Skins", "Character art", "Pack"],
    link: "https://ruddy-lettuce-918.notion.site/Fall-Caramel-Latte-30db731f8e798163a798d2a188deb3c4"
  },
  {
    title: "Minecraft Addons Archive 2023",
    year: "2023",
    type: "minecraft",
    role: "Early addon archive",
    featured: false,
    image: "assets/minecraft-addons-archive-2023.png",
    description:
      "Archivo de primeros proyectos con JSON, resource packs, entidades custom y logica manual de gameplay.",
    tags: ["JSON", "Resource packs", "Entities", "System design"],
    link: "https://ruddy-lettuce-918.notion.site/MINECRAFT-Addons-Archive-2023-30db731f8e7981fd9d5af99df6f17eb4"
  },
  {
    title: "Minecraft Addons",
    year: "archivo",
    type: "minecraft",
    role: "addons / behavior packs",
    featured: false,
    image: "assets/minecraft-addons-marketplace.png",
    description:
      "Addons con scripting, API integrations, entidades custom, behavior packs y mecanicas jugables para Minecraft.",
    tags: ["Minecraft", "Addons", "Scripting", "Custom AI"],
    credit: "Imagen de referencia: Minecraft Marketplace"
  },
  {
    title: "The Sandbox Works",
    year: "archivo",
    type: "sandbox",
    role: "world / assets / logic",
    featured: false,
    image: "assets/the-sandbox-reference.svg",
    description:
      "Trabajo en assets, logica y espacios jugables dentro de The Sandbox.",
    tags: ["Worlds", "Assets", "Game logic", "Level design"],
    credit: "Referencia visual: The Sandbox"
  },
  {
    title: "Paginas web",
    year: "2026",
    type: "web",
    role: "websites / institucional",
    featured: false,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Sitios web para proyectos, instituciones y negocios: paginas informativas, secciones editables, componentes dinamicos e identidad visual cuidada. Incluye trabajos como la web de Cacique Pelayo.",
    tags: ["HTML", "CSS", "JS", "Institucional"],
    link: "https://caciquepelayo.edu.ar/",
    linkLabel: "Ver Cacique Pelayo"
  },
  {
    title: "Producciones sonoras",
    year: "seleccion",
    type: "sound",
    role: "producer / mix",
    featured: false,
    image: "assets/producciones-sonoras-portada.jpg",
    description:
      "Proyecto musical final de la carrera de produccion: composicion, produccion, mezcla, identidad visual y criterio sonoro propio.",
    tags: ["Proyecto final", "Produccion", "Mix", "Sound design", "Musica"]
  }
];

const projectGrid = document.querySelector("#projectGrid");
const filterButtons = document.querySelectorAll(".filter");

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = `project-card${project.featured ? " featured" : ""}${project.gallery ? " has-gallery" : ""}`;
  card.dataset.type = project.type;
  const galleryMarkup = project.gallery
    ? `<div class="project-gallery" aria-label="Capturas de ${project.title}">
        ${project.gallery
          .map(
            (item) => `
              <figure>
                <img src="${item.image}" alt="${item.label} en ${project.title}">
                <figcaption>${item.label}</figcaption>
              </figure>
            `
          )
          .join("")}
      </div>`
    : "";

  card.innerHTML = `
    <div class="project-media">
      <img src="${project.image}" alt="Imagen de ${project.title}">
      <span class="project-type">${project.type}</span>
      ${project.credit ? `<span class="project-credit">${project.credit}</span>` : ""}
    </div>
    <div class="project-body">
      <div class="project-meta">
        <span>${project.year}</span>
        <span>${project.role}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      ${galleryMarkup}
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      ${project.link ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener">${project.linkLabel || "Ver proyecto"}</a>` : ""}
    </div>
  `;

  return card;
}

function renderProjects(activeFilter = "all") {
  projectGrid.innerHTML = "";

  projects
    .filter((project) => activeFilter === "all" || project.type === activeFilter)
    .forEach((project) => {
      projectGrid.appendChild(createProjectCard(project));
    });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
