

const Project = ({ link, image, description, title }) => {
  return (
    <>
      <div class="frame-project">
        <div class="background">
          <a href={link} target="_blank">
            <img src={image} alt="Logo image" />
          </a>
        </div>
        <div className="description">
          <h2 class="name-project ibm-plex-mono-regular">
            <a
              class="link-project ibm-plex-mono-regular"
              href={link}
              target="_blank"
            >
              {title}
            </a>
          </h2>
          <p class="description-project ibm-plex-mono-regular">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
