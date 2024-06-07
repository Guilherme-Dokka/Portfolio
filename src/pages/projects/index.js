import Footer from "Footer";
import Header from "../../Header";
import Project from "Project";

const projects = () => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="index-project">
          <div className="title">
            <h1 className="ibm-plex-mono-medium title-project">Projects</h1>
          </div>

          <section className="project">
            <Project />
          
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default projects;
