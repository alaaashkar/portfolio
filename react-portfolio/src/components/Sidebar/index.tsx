import { Link, NavLink } from 'react-router-dom';
import cn from 'classnames';
import './index.scss';
import 'animate.css'
import logoA from '../../assets/images/a-logo-zip-file/png/logo-no-background.png';
// import logoSubtitle from '../../assets/images/alaa-logo-zip-file/png/logo-no-background.png
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

export const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);



  return (
    <div className='nav-bar'>
      <Link className='logo' to="/">
        <img src={logoA} alt="logo" />
        {/* <img src={logoSubtitle} alt="alaa" /> */}
      </Link>

      <nav className={cn('nav-links', {
        'mobile-show animate__animated animate__slideInRight animate__faster': showNav,
        // 'animate__animated animate__slideOutRight animate__faster': !showNav,
      })}>
        <NavLink onClick={() => setShowNav(false)} to="/">
          <FontAwesomeIcon className='nav__icon' icon={faHome} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} className="about-link" to="/about">
          <FontAwesomeIcon className='nav__icon' icon={faUser} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon className='nav__icon' icon={faSuitcase} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <NavLink onClick={() => setShowNav(false)} className="contact-link" to="/contact">
          <FontAwesomeIcon className='nav__icon' icon={faEnvelope} style={{ color: '#4d4d4e' }} />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='#ffd700'
          size='3x'
          className='close-icon' />
      </nav>

      <ul className="nav-socialLinks">
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
      <FontAwesomeIcon onClick={() => setShowNav(true)} icon={faBars} color='#ffd700' size='3x' className='hamburger-icon' />
    </div >
  );
};
