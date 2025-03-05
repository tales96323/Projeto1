import React, { useState, useEffect } from "react";

function Home() {
  const professions = [
    "Mechanical Engineer",
    "Structural Steel Designer",
    "Programmer",
    "Software Engineer",
    "Data Analyst",
    "Cost Estimator",
    "Industrial Planner"
  ];

  const [currentProfession, setCurrentProfession] = useState(professions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % professions.length);
    }, 3500); // Muda a profissão a cada 3.5 segundos

    return () => clearInterval(interval);
  }, [professions.length]);

  useEffect(() => {
    setCurrentProfession(professions[index]);
  }, [index, professions]);

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/assets/css/styles.css" />

        {/* =====BOX ICONS===== */}
        <link
          href="https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css"
          rel="stylesheet"
        />

        <title>Portfolio website complete</title>
      </head>

      <body>
        {/* ===== HEADER ===== */}
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <a href="#" className="nav__logo">
                Website still in production...
              </a>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#about" className="nav__link">
                    About
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#skills" className="nav__link">
                    Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#work" className="nav__link">
                    Work
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#contact" className="nav__link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className="bx bx-menu"></i>
            </div>
          </nav>
        </header>

        <main className="l-main">
          {/* ===== HOME ===== */}
          <section className="home bd-grid" id="home">
            <div className="home__data">
              <h1 className="home__title">
                Hi,
                <br />
                I'm <span className="home__title-color">Tales</span>
                <br />
                <span className="home__profession">{currentProfession}</span>
              </h1>
              <a href="#contact" className="button">
                Contact
              </a>
            </div>

            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/tales-santos-7950b49a/"
                className="home__social-icon"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/tales96323"
                className="home__social-icon"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>

            <div className="home__img">
              <svg
                className="home__blob"
                viewBox="0 0 479 467"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                  <image
                    className="home__blob-img"
                    x="50"
                    y="60"
                    href="/assets/img/perfil.png"
                  />
                </g>
              </svg>
            </div>
          </section>

          {/* ===== ABOUT ===== */}
          <section className="about section" id="about">
            <h2 className="section-title">About</h2>
            <div className="about__container bd-grid">
              <div className="about__img">
                <img src="/assets/img/about.jpg" alt="About" />
              </div>
              <div>
                <h2 className="about__subtitle">About me:</h2>
                <p className="about__text">
                  I am a Software developer. Dedicated, with strong
                  communication skills and the ability to work in a team. I have
                  a keen interest in providing positive customer experiences and
                  ensuring high-quality customer service. My discipline and
                  attention to detail, developed in engineering, will be applied
                  to ensure excellence in the service provided.
                </p>
              </div>
            </div>
          </section>

          {/* ===== SKILLS ===== */}
          <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills__container bd-grid">
              <div>
                <h2 className="skills__subtitle">Professional Skills</h2>
                <p className="skills__text">
                  Below are some of my skills related to programming and
                  software development.
                </p>

                {/* Python */}
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-python skills__icon"></i>
                    <span className="skills__name">Python</span>
                  </div>
                  <div className="skills__bar skills__python"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>

                {/* Data Analysis */}
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxs-data skills__icon"></i>
                    <span className="skills__name">Data Analysis</span>
                  </div>
                  <div className="skills__bar skills__data-analysis"></div>
                  <div>
                    <span className="skills__percentage">75%</span>
                  </div>
                </div>

                {/* Docker */}
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-docker skills__icon"></i>
                    <span className="skills__name">Docker</span>
                  </div>
                  <div className="skills__bar skills__docker"></div>
                  <div>
                    <span className="skills__percentage">65%</span>
                  </div>
                </div>

                {/* JavaScript */}
                <div className="skills__data">
                  <div className="skills__names">
                    <i className="bx bxl-javascript skills__icon"></i>
                    <span className="skills__name">JavaScript</span>
                  </div>
                  <div className="skills__bar skills__javascript"></div>
                  <div>
                    <span className="skills__percentage">85%</span>
                  </div>
                </div>
              </div>

              <div>
                <img
                  src="/assets/img/work4.jpg"
                  alt="Work"
                  className="skills__img"
                />
              </div>
            </div>
          </section>

          {/* ===== WORK ===== */}
          <section className="work section" id="work">
            <h2 className="section-title">Work</h2>
            <div className="work__container bd-grid">
              <a
                href="https://github.com/tales96323/FronteiraEficiente"
                className="work__img"
              >
                <img src="/assets/img/work1.jpg" alt="Work 1" />
              </a>
              <a
                href="https://github.com/tales96323/Projeto1"
                className="work__img"
              >
                <img src="/assets/img/work2.jpg" alt="Work 2" />
              </a>
              <a
                href="https://github.com/tales96323/estudo_dados"
                className="work__img"
              >
                <img src="/assets/img/work3.jpg" alt="Work 3" />
              </a>
            </div>
          </section>

          {/* ===== CONTACT ===== */}
          <section className="contact section" id="contact">
            <h2 className="section-title">Contact</h2>
            <div className="contact__container bd-grid">
              <form action="#" className="contact__form">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact__input"
                />
                <input
                  type="mail"
                  placeholder="Email"
                  className="contact__input"
                />
                <textarea
                  cols="0"
                  rows="10"
                  className="contact__input"
                ></textarea>
                <input
                  type="button"
                  value="Enviar"
                  className="contact__button button"
                />
              </form>
            </div>
          </section>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p className="footer__title">Tales</p>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/share/sx66x8jc2sBzhcVf/?mibextid=qi2Omg"
              className="footer__icon"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/taleeko?igsh=ZnVraGg2cHBlN29l"
              className="footer__icon"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="footer__icon">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <p className="footer__copy">&#169; All rights reserved</p>
          <p className="footer__copy"> Website still in production... </p>
        </footer>

        {/* ===== SCROLL REVEAL ===== */}
        <script src="https://unpkg.com/scrollreveal"></script>

        {/* ===== MAIN JS ===== */}
        <script src="/assets/js/main.js"></script>
      </body>
    </div>
  );
}

export default Home;