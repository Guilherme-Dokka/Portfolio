import Footer from "Footer";
import Header from "../../Header";
import Project from "Project";
import nuBank from "../../svg/nu-img-project.svg";
import blog from "../../svg/blog.svg";

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
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default projects;
