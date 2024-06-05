import contact from '../svg/contact-me.svg'
import github from '../svg/github.svg'
import codepen from '../svg/codepen.svg'
import linkedin from '../svg/linkedin.svg'

const Header = () => {
  return (
    <>
      <header className="">
        <nav className="navegation-descktop">
          <ul className="item">
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
                href="https://codepen.io/trending"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                CODEPEN
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
            <li className="item-navegation">
              <a href="" className="ibm-plex-mono-regular" target="_blank">
                CONTACT-ME
              </a>
            </li>
          </ul>
        </nav>

        <nav className="navegation-mobile none">
          <ul className="item">
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
                href="https://codepen.io/trending"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                <img src={codepen} alt="Codepen" />
              </a>
            </li>
            <li className="item-navegation">
              <a
                href="https://www.linkedin.com/in/guilherme-dokka/"
                className="ibm-plex-mono-regular"
                target="_blank"
              >
                <img src={linkedin}alt="Linkedin" />
              </a>
            </li>
            <li className="item-navegation">
              <a href="" className="ibm-plex-mono-regular" target="_blank">
                <img src={contact} alt="contact-me" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
