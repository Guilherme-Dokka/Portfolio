import JS from "../../svg/js.svg";
import CSS from "../../svg/CSS.svg";
import HTML from "../../svg/HTML.svg";
import react from "../../svg/react.svg";
import nuBank from "../../svg/nu-img-project.svg";
import blog from "../../svg/blog.svg";

import Project from "Project";
import Header from "Header";
import Footer from "Footer";
const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <main className="hero">
          <section className="dev">
            <p className="dev-1 ibm-plex-mono-regular">HI, I'M</p>
            <p className="dev-2 ibm-plex-mono-medium">Guilherme Henrique</p>
            <p className="dev-3 ibm-plex-mono-regular">Front-end developer</p>
          </section>
          <section className="about-me">
            <p className="ibm-plex-mono-light">
              I'm 21 years old and I enjoy creating consistent and responsive
              interfaces as well as animations, always zealing for the best user
              experience.
            </p>
          </section>
          <section className="skills">
            <h3 className="ibm-plex-mono-medium">SKILLS</h3>
            <ul className="item">
              <div>
                <il className="itens-skill ibm-plex-mono-regular">
                  <img src={HTML} alt="HTML ICON" />
                  HTML
                </il>
                <il className="itens-skill ibm-plex-mono-regular">
                  <img src={CSS} alt="CSS ICON" />
                  CSS
                </il>
              </div>
              <br />
              <div>
                <il className="itens-skill ibm-plex-mono-regular">
                  <img src={JS} alt="JAVASCRIPT ICON" />
                  JAVASCRIPT
                </il>
                <il className="itens-skill ibm-plex-mono-regular">
                  <img src={react} alt="REACT ICON" />
                  REACT
                </il>
              </div>
            </ul>
          </section>
          <div className="ibm-plex-mono-medium info-contact">
            <h3 className="ibm-plex-mono-medium">CONTACT-ME</h3>
            <p className="email ibm-plex-mono-regular">
              guilherme.dokka@gmail.com
            </p>
          </div>

          <section className="project-mobile">
            <h3 className="ibm-plex-mono-medium title-mobile-project">
              PROJECTS
            </h3>
            <div className="mobile">
              <Project
                link={"https://nubank-inspirarion.vercel.app/"}
                title={"NuBank"}
                description={"inspired by the Nubank website"}
                image={nuBank}
              />

              <Project
                link={"https://blog-peach-kappa.vercel.app/"}
                title={"Blog"}
                description={
                  "Blog created in the project of the Frontpush course."
                }
                image={blog}
              />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
