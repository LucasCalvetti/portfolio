const iconMenu = document.getElementById("icon-menu");
const mainMenu = document.getElementById("main-menu");
const articles = document.querySelectorAll("#proyectos article");
const skills = document.querySelectorAll("#skills i");
const express = document.getElementById("express");
const firebase = document.getElementById("firebase");
const algolia = document.getElementById("algolia");
const ava = document.getElementById("ava");
const postman = document.getElementById("postman");
const ts = document.getElementById("ts");
const tailwind = document.getElementById("tailwind");
const nextjs = document.getElementById("nextjs");
const postgresql = document.getElementById("postgresql");
const titleSpan = document.getElementById("title-span");
const headerTitle = document.getElementById("header-title");
headerTitle.textContent = "< Lucas ";
titleSpan.textContent = "<FULL STACK DEVELOPER />";
// Initializes the ScrollReveal library to create scroll-based animations on the webpage.
window.sr = ScrollReveal();
// Function to set up animations for different sections of the webpage
const revealSectionAnimation = (section, direction, distance) => {
  sr.reveal(section, {
    duration: 2500,
    origin: direction,
    distance: distance,
  });
};
// Applying animations to specific sections
revealSectionAnimation(".header", "bottom", "-100px");
revealSectionAnimation(".profile-title", "left", "250px");
revealSectionAnimation(".container-projects", "left", "1000px");
revealSectionAnimation(".container--about-me", "bottom", "500px");
revealSectionAnimation(".container-form", "right", "250px");

// Checks the scroll in pixels and updates the style of the navigation bar depending on where in the page the user is.
if (window.innerWidth > 768) {
  const allMenuItem = document.querySelectorAll(".menu--item-link");
  window.addEventListener("scroll", () => {
    const windowHeigth = window.scrollY;
    allMenuItem.forEach((elem, i) => {
      if (windowHeigth === 0 || (windowHeigth > 0 && windowHeigth < 475)) {
        i === 0 ? ((allMenuItem[i].style.backgroundColor = "#1a1c1f"), (allMenuItem[i].style.transform = "scale(1.2)")) : ((allMenuItem[i].style.backgroundColor = "#1061ee"), (allMenuItem[i].style.transform = "scale(1)"));
      } else if (windowHeigth > 475 && windowHeigth < 2000) {
        i === 1 ? ((allMenuItem[i].style.backgroundColor = "#1a1c1f"), (allMenuItem[i].style.transform = "scale(1.2)")) : ((allMenuItem[i].style.backgroundColor = "#1061ee"), (allMenuItem[i].style.transform = "scale(1)"));
      } else if (windowHeigth >= 2000 && windowHeigth < 3075) {
        i === 2 ? ((allMenuItem[i].style.backgroundColor = "#1a1c1f"), (allMenuItem[i].style.transform = "scale(1.2)")) : ((allMenuItem[i].style.backgroundColor = "#1061ee"), (allMenuItem[i].style.transform = "scale(1)"));
      } else {
        i === 3 ? ((allMenuItem[i].style.backgroundColor = "#1a1c1f"), (allMenuItem[i].style.transform = "scale(1.2)")) : ((allMenuItem[i].style.backgroundColor = "#1061ee"), (allMenuItem[i].style.transform = "scale(1)"));
      }
    });
  });
}

iconMenu.addEventListener("click", () => {
  mainMenu.classList.toggle("menu--show");
});
const descriptionproject = [
  {
    title: "Piedra, papel o tijeras online",
    description: "Podes Jugar al piedra papel o tijera contra un amigo,<br/> solo debes compartir el codigo de sala.<br/><br/> IMPORTANTE: Demora 60 segundos en iniciar la pagina <br/> debido al sleep mode del host.",
    icon: ["fab fa-css3-alt", "fab fa-html5", "fab fa-js-square", "fab fa-node"],
    iconifyIcons: ["simple-icons:typescript", "mdi:firebase"],
    id: "ppoto",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    linkGithub: "https://github.com/LucasCalvetti/rock-paper-scissors-online",
    linkDemo: "https://youtu.be/PJ7OvW5xsI4",
    linkPage: "https://rock-paper-scissors-online-dxti.onrender.com/",
    id_index: 1,
  },
  {
    title: "Buscador de mascotas perdidas",
    description:
      "Una simple app para registrar mascotas perdidas<br/> con geolocalización en un mapa y si alguien la encuentra<br/> te envia un mail.<br/><br/> IMPORTANTE: Demora 60 segundos en iniciar la pagina <br/> debido al sleep mode del host.",
    icon: ["fab fa-react", "fab fa-css3-alt", "fab fa-html5"],
    iconifyIcons: ["simple-icons:typescript", "simple-icons:postgresql", "simple-icons:express", "simple-icons:algolia"],
    id: "pet-finder",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    linkGithub: "https://github.com/LucasCalvetti/lost-pets-app-with-react",
    linkDemo: "https://youtu.be/l8EVf5mMz-Y",
    linkPage: "https://lucas-calvetti-lost-pets-react.web.app/",
    id_index: 2,
  },
  {
    title: "Triunfo360",
    description: "<br/> StartUp en la que estuve trabajando desarrollando landings,<br/> gráficos, conexiones API, liderando equipo y creciendo profesionalmente. <br/> Actualmente en construcción. (No hay video Demo aún)",
    icon: ["fab fa-js-square", "fab fa-css3-alt", "fab fa-html5", "fab fa-react"],
    iconifyIcons: ["mdi:tailwind"],
    id: "triunfo360",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    id_index: 3,
  },
  {
    title: "API para E-commerce",
    description: "Una APIRest desarrollada con Nextjs serverless <br/> Para utilizarla podes usar los datos en la documentación<br/> via Postman o similar. (No hay video Demo aún)",
    icon: ["fab fa-js-square"],
    iconifyIcons: ["simple-icons:avajs", "simple-icons:typescript", "file-icons:nextjs", "simple-icons:algolia", "simple-icons:postgresql", "cib:postman"],
    id: "ecommerce",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    linkGithub: "https://github.com/LucasCalvetti/desafio-ecommerce-dwf-m9",
    documentation: "https://documenter.getpostman.com/view/17225834/2s93eWysNw",
    id_index: 4,
  },
  {
    title: "Piedra, papel o tijeras vs PC",
    description: "<br/> Podes Jugar al piedra papel o tijera contra la PC.",
    icon: ["fab fa-css3-alt", "fab fa-html5", "fab fa-js-square", "fab fa-node", "fab fa-github"],
    iconifyIcons: ["simple-icons:typescript"],
    id: "ppot",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    linkGithub: "https://github.com/LucasCalvetti/dwf-m5-desafio-final-juego",
    linkPage: "https://lucascalvetti.github.io/dwf-m5-desafio-final-juego/",
    id_index: 5,
  },
  {
    title: "Portfolio",
    description: "<br/> Este mismo portfolio, hecho de manera muy<br/> simple ya que no requiere escalabilidad.",
    icon: ["fab fa-css3-alt", "fab fa-html5", "fab fa-js-square", "fab fa-node", "fab fa-github"],
    iconifyIcons: ["simple-icons:express"],
    id: "portfolio",
    iconGithub: "fab fa-github",
    iconDemo: "fab fa-youtube",
    page: "fas fa-globe-americas",
    linkGithubFront: "https://github.com/LucasCalvetti/portfolio-frontend",
    linkGithubBack: "https://github.com/LucasCalvetti/portfolio-backend",
    linkPage: "https://lucascalvetti.github.io/portfolio-frontend/",
    id_index: 6,
  },
];
const textSkill = [
  { id: "html", text: "HTML5" },
  { id: "css", text: "Css3" },
  { id: "js", text: "JavaScript" },
  { id: "react", text: "React" },
  { id: "nextjs", text: "NextJs" },
  { id: "node", text: "Node JS" },
  { id: "postgresql", text: "PostgreSQL" },
  { id: "github", text: "Github" },
  { id: "git", text: "Git" },
  { id: "express", text: "Express.js" },
  { id: "algolia", text: "Algolia" },
  { id: "firebase", text: "Firebase" },
  { id: "ts", text: "Typescript" },
  { id: "tailwind", text: "Tailwind" },
  { id: "ava", text: "Ava" },
  { id: "postman", text: "Postman" },
];

const rellenar = (e) => {
  for (datos of descriptionproject) {
    var iconifyIcons = [];
    if (datos.iconifyIcons[0]) {
      iconifyIcons = datos.iconifyIcons.map((dato) => `<span class="iconify" style="width: 26px; height: 26px; position: relative; bottom: 12px;" data-icon="${dato}"></span>`);
    }
    let iconos = datos.icon.map((dato) => `<i class="${dato} icon"></i>`);
    let iconosSinComas = iconos.join("");
    let iconifyIconsSinComas = iconifyIcons.join("");
    if (datos.id === e.target.id) {
      let linksHTML = "";
      if (datos.linkGithubBack) {
        linksHTML += `<a href="${datos.linkGithubBack}" class="link-github" target="_blank" ><i class="${datos.iconGithub}"></i> Github Backend</a>`;
      } else if (datos.linkGithub) {
        linksHTML += `<a href="${datos.linkGithub}" class="link-github" target="_blank" ><i class="${datos.iconGithub}"></i> Github</a>`;
      }
      if (datos.linkDemo) {
        linksHTML += `<a href="${datos.linkDemo}" class="link-github" target="_blank" ><i class="${datos.iconDemo}"></i>Demo</a>`;
      } else if (datos.linkGithubFront) {
        linksHTML += `<a href="${datos.linkGithubFront}" class="link-github" target="_blank" ><i class="${datos.iconGithub}"></i> Github Frontend</a>`;
      } else {
        linksHTML += `</>`;
      }
      if (datos.linkPage || datos.documentation) {
        linksHTML += `<a href="${datos.linkPage ? datos.linkPage : datos.documentation}" class="link-page" target="_blank" ><i class="${datos.page}"></i> ${datos.linkPage ? "Visitar sitio web" : "Ver documentación"}</a>`;
      }
      document.getElementById(`${datos.id}`).insertAdjacentHTML(
        "afterbegin",
        `<div class="container--information-project">
          <h3 class="information--title">${datos.title}</h3>
          <p class="information--description">${datos.description}</p>
          <div class="container-icon">
            <div class="container-icon1">
              ${iconosSinComas}
            </div>
            <div class="container-icon2">
              ${datos.iconifyIcons ? `${iconifyIconsSinComas}` : ""}
            </div>
          </div>
          <div class="container--information-links">
            ${linksHTML}
          </div>
        </div>`
      );
      break;
    }
  }
};

const verProyectosCelulares = (e) => {
  let index = 0;
  for (datos of descriptionProject) {
    index++;
    let iconos = datos.icon.map((dato) => `<i class="${dato} icon"></i>`);
    let iconosSinComas = iconos.join("");
    if (datos.id_index === index) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML(
        "afterbegin",
        `<div class="container--information-project">
                    <h3 class="information--title">${datos.title} </h3>
                    <p class="information--description">${datos.description}</p>
                    <div class="container-icon">
                        ${iconosSinComas}
                    </div>
                    <div class="container--information-links">
                        <a href="${datos.linkGithub}" class="link-github" target="_blank" ><i class="${datos.iconGithub}"></i> Github</a>
                        <a href="${datos.linkPage ? datos.linkPage : datos.documentation}" class="link-page" target="_blank" ><i class="${datos.page}"></i> Visitar sitio web</a>
                    </div>
                </div>`
      );
    }
  }
};

if (window.innerWidth < 768) {
  (async () => {
    verProyectosCelulares();
  })();
}

const skillText = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("afterbegin", `<h5 class="text-skill">${datos.text}</h5>`);
    }
  }
};
const skillExpress = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteExpress">${datos.text}</h5>`);
    }
  }
};
const skillFirebase = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteFirebase">${datos.text}</h5>`);
    }
  }
};
const skillAlgolia = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteAlgolia">${datos.text}</h5>`);
    }
  }
};
const skillTs = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteTs">${datos.text}</h5>`);
    }
  }
};
const skillTailwind = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteTailwind">${datos.text}</h5>`);
    }
  }
};
const skillPostman = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deletePostman">${datos.text}</h5>`);
    }
  }
};
const skillAva = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon text-ava" id="deleteAva">${datos.text}</h5>`);
    }
  }
};
const skillNextjs = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deleteNextjs">${datos.text}</h5>`);
    }
  }
};
const skillPostgresql = (e) => {
  for (datos of textSkill) {
    if (e.target.id === datos.id) {
      document.getElementById(`${datos.id}`).insertAdjacentHTML("beforeend", `<h5 class="text-skill-icon" id="deletePostgresql">${datos.text}</h5>`);
    }
  }
};
articles.forEach((article) => {
  if (window.innerWidth > 768) {
    article.addEventListener("mouseenter", rellenar);
    article.addEventListener("mouseleave", (e) => (document.getElementById(`${e.target.id}`).innerHTML = ""));
  }
});

skills.forEach((skill) => {
  skill.addEventListener("mouseenter", skillText);
  skill.addEventListener("mouseleave", (e) => (document.getElementById(`${e.target.id}`).innerHTML = ""));
});

express.addEventListener("mouseenter", skillExpress);
express.addEventListener("mouseleave", () => document.getElementById(`express`).removeChild(deleteExpress));
firebase.addEventListener("mouseenter", skillFirebase);
firebase.addEventListener("mouseleave", () => document.getElementById("firebase").removeChild(deleteFirebase));
algolia.addEventListener("mouseenter", skillAlgolia);
algolia.addEventListener("mouseleave", () => document.getElementById("algolia").removeChild(deleteAlgolia));
ts.addEventListener("mouseenter", skillTs);
ts.addEventListener("mouseleave", () => document.getElementById("ts").removeChild(deleteTs));
tailwind.addEventListener("mouseenter", skillTailwind);
tailwind.addEventListener("mouseleave", () => document.getElementById("tailwind").removeChild(deleteTailwind));
ava.addEventListener("mouseenter", skillAva);
ava.addEventListener("mouseleave", () => document.getElementById("ava").removeChild(deleteAva));
postman.addEventListener("mouseenter", skillPostman);
postman.addEventListener("mouseleave", () => document.getElementById("postman").removeChild(deletePostman));
nextjs.addEventListener("mouseenter", skillNextjs);
nextjs.addEventListener("mouseleave", () => document.getElementById("nextjs").removeChild(deleteNextjs));
postgresql.addEventListener("mouseenter", skillPostgresql);
postgresql.addEventListener("mouseleave", () => document.getElementById("postgresql").removeChild(deletePostgresql));
