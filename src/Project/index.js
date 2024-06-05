import nuBank from "../svg/nu-img-project.svg";

const Project = () => {
  return (
    <>
      <h1 className="ibm-plex-mono-medium title-project">Projects</h1>

      <div class="frame-project">
        <div class="background">
          <a href="https://nubank-inspirarion.vercel.app/" target="_blank">
            <img src={nuBank} alt="Logo NuBank" />
          </a>
        </div>
        <div className="description">
          <h2 class="name-project ibm-plex-mono-regular">
            <a
              class="link"
              href="https://nubank-inspirarion.vercel.app"
              target="_blank"
            >
              NuBank
            </a>
          </h2>
          <p class="description-project ibm-plex-mono-regular">
            inspired by the Nubank website
          </p>
        </div>
      </div>
    </>
  );
};

export default Project;