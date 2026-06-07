export function renderMenu() {
  return `
    <h1 class="title">CELIA DYREMYHR</h1>

    <nav class="menu">
      <div class="menu-item" data-page="projects">
        <img src="img/projects.png" alt="Projects">
        <span>projects</span>
      </div>

      <div class="menu-item" data-page="cv">
        <img src="img/cv.png" alt="CV">
        <span>cv</span>
      </div>

      <div class="menu-item" data-page="skillset">
        <img src="img/skillset.png" alt="Skillset">
        <span>skillset</span>
      </div>
    </nav>
  `;
}