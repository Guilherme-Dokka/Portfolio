import github from "../svg/github.svg";
import codepen from "../svg/codepen.svg";
import linkedin from "../svg/linkedin.svg";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <header>
        <nav className="navegation-descktop">
          <ul className="item">
            <li className="item-navegation">
              <Link to="/" className="ibm-plex-mono-regular">
                HOME
              </Link>
            </li>

            <li className="item-navegation">
              <Link to="/projects" className="ibm-plex-mono-regular">
                PROJECTS
              </Link>
            </li>
            <li className="item-navegation">
              <a
                href="https://github.com/Guilherme-Dokka"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                GITHUB
              </a>
            </li>
            <li className="item-navegation">
              <a
                href="https://www.linkedin.com/in/guilherme-dokka/"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                LINKEDIN
              </a>
            </li>
          </ul>
        </nav>

        <nav className="navegation-mobile none">
          <ul className="item">
            <li className="item-navegation">
              {location.pathname === "/projects" && (
                <Link to="/" className="ibm-plex-mono-regular">
                  HOME
                </Link>
              )}
            </li>
            <li className="item-navegation">
              <a
                href="https://github.com/Guilherme-Dokka"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                <img src={github} alt="Github" />
              </a>
            </li>
            <li className="item-navegation">
              <a
                href="https://www.linkedin.com/in/guilherme-dokka/"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
