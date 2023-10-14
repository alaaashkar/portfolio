import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoA from '../../assets/images/a-logo-zip-file/png/logo-no-background.png';
// import logoSubtitle from '../../assets/images/alaa-logo-zip-file/png/logo-no-background.png
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

export const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to="/">
        <img src={logoA} alt="logo" />
        {/* <img src={logoSubtitle} alt="alaa" /> */}
      </Link>

      <nav>
        <NavLink to="/">
          <FontAwesomeIcon className='nav__icon' icon={faHome} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <NavLink className="about-link" to="/about">
          <FontAwesomeIcon className='nav__icon' icon={faUser} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <NavLink className="contact-link" to="/contact">
          <FontAwesomeIcon className='nav__icon' icon={faEnvelope} style={{ color: '#4d4d4e' }} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target='__blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/alaa-ashkar/'
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target='__blank'
            rel='noreferrer'
            href='https://github.com/alaaashkar/'
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target='__blank'
            rel='noreferrer'
            href='skype:live:.cid.106a99bd431dd4d1'
          >
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};
