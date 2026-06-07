export function renderCV() {
  return `
    <div class="page-header">
      <button class="back-btn">go back</button>
      <h1 class="title">CELIA DYREMYHR</h1>
    </div>
    <div class="cv-page">

    <section class="cv-header">

      <img src="img/headshot.jpg" alt="Celia Dyremyhr headshot" class="headshot">

      <div class="cv-contact">
        <p>E-mail: celiadyre@gmail.com</p>
        <p>Phone: +47 45469985</p>

        <a href="pdf/CV_CeliaDyremyhr_2026_ENG.pdf" target="_blank" class="cv-link">
            Click here to view my full CV.
        </a>
      </div>

    </section>

      <div class="cv-sections">

        <section class="timeline-section">
        <h2>EDUCATION</h2>

        <div class="timeline-item">
          <div class="year"><h3>2025-2027</h3></div>
          <div class="timeline-content">
            <h3>Front-End Development</h3>
            <p>Noroff Fagskole, Norway</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="year"><h3>2024</h3></div>
          <div class="timeline-content">
            <h3>International Tourism and Entrepreneurship</h3>
            <p>Udayana University, Indonesia</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="year"><h3>2020-2023</h3></div>
          <div class="timeline-content">
            <h3>BSc Entrepreneurship</h3>
            <p>Handelshøyskolen BI, Oslo</p>
          </div>
        </div>
      </section>

      <section class="timeline-section">
        <h2>WORK EXPERIENCE</h2>

        <div class="timeline-item">
          <div class="year"><h3>2023-</h3></div>
          <div class="timeline-content">
            <h3>E-commerce Manager</h3>
            <p>At Home AS, Oslo / Remote</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="year"><h3>2020-2023</h3></div>
          <div class="timeline-content">
            <h3>Founder & CEO</h3>
            <p>TRYST AS, Oslo</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="year"><h3>2019-2021</h3></div>
          <div class="timeline-content">
            <h3>Receptionist</h3>
            <p>Bare Flyt AS, Oslo</p>
          </div>
        </div>
      </section>

    </div>
  `;
}
