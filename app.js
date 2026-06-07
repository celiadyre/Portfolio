import { renderMenu } from "./menu.js";
import { renderProjects } from "./projects.js";
import { renderCV } from "./cv.js";
import { renderSkillset } from "./skillset.js";

const dots = document.getElementById("dots");
const loadingScreen = document.getElementById("loading-screen");
const app = document.getElementById("app");

let cycle = 0;
let step = 0;

const animation = setInterval(() => {
  step++;

  switch (step) {
    case 1:
      dots.textContent = ".";
      break;

    case 2:
      dots.textContent = "..";
      break;

    case 3:
      dots.textContent = "...";
      break;

    case 4:
      dots.textContent = "";
      step = 0;
      cycle++;

      if (cycle === 2) {
        clearInterval(animation);

        loadingScreen.classList.add("fade-out");

        setTimeout(() => {
          loadingScreen.remove();
          app.classList.remove("hidden");
          showMenu();
        }, 800);
      }

      break;
  }
}, 300);

function showMenu() {
  app.innerHTML = renderMenu();

  document
    .querySelector('[data-page="projects"]')
    .addEventListener("click", showProjects);

  document
    .querySelector('[data-page="cv"]')
    .addEventListener("click", showCV);

  document
    .querySelector('[data-page="skillset"]')
    .addEventListener("click", showSkillset);
}

function addBackButtonListener() {
  document
    .querySelector(".back-btn")
    .addEventListener("click", showMenu);
}

function showProjects() {
  app.innerHTML = renderProjects();
  addBackButtonListener();
}

function showCV() {
  app.innerHTML = renderCV();
  addBackButtonListener();
}

function showSkillset() {
  app.innerHTML = renderSkillset();
  addBackButtonListener();
}