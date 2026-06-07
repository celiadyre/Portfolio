export function renderProjects() {
  return `

  <div class="page-header">
  <button class="back-btn">go back</button>
  <h1 class="title">CELIA DYREMYHR</h1>
</div>
    <section class="projects-page">
      <div class="projects-grid">
        <a class="project-card" href="https://celiadyre.github.io/Rainy-Days/" target="_blank">
          <h2>RAINY DAYS</h2>
          <img src="img/rainydays.png" alt="Rainy Days project">
          <p>
            My first experience with all coding languages are rooted in this
            online store. Exploring filtering, box grids, simple HTML to design
            and code this online shop for outdoor wear :)
          </p>
        </a>

        <a class="project-card" href="https://celiadyre.github.io/SemesterProject1/" target="_blank">
          <h2>CSM</h2>
          <img src="img/csm.png" alt="CSM project">
          <p>
            Deeper understanding of HTML and CSS, focus on mobile optimization
            and design catering to parents of children wanting to visit this
            science museum :)
          </p>
        </a>

        <a class="project-card" href="https://celiadyre.github.io/ExamProject1/" target="_blank">
          <h2>PETRICHOR</h2>
          <img src="img/petrichor.png" alt="Petrichor project">
          <p>
            Experimenting with SPA using Vanilla JavaScript. Prioritizing the
            build over the UI/UX to develop knowledge in the fundamentals of
            JavaScript coding in this mixed online store :)
          </p>
        </a>
      </div>

      <div class="github-links">
        <a href="https://github.com/celiadyre/Rainy-Days" target="_blank">
          <img src="img/github.png" alt="Rainy Days GitHub">
        </a>

        <a href="https://github.com/celiadyre/SemesterProject1" target="_blank">
          <img src="img/github.png" alt="CSM GitHub">
        </a>

        <a href="https://github.com/celiadyre/ExamProject1" target="_blank">
          <img src="img/github.png" alt="Petrichor GitHub">
        </a>
      </div>

    </section>
  `;
}
