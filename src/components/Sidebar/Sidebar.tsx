import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Logo from '../../assets/images/Logo3-transparent.png';

import './Sidebar.style.scss';

const Sidebar = () => {
  const sideBar = useRef<HTMLDivElement>(null);

  const handleToggleMobile = () => {
    if (!sideBar.current?.classList.contains('open')) {
      sideBar.current?.classList.add('open');
    } else {
      sideBar.current?.classList.remove('open');
    }
  };

  const handleClickNav = () => {
    const body = document.querySelector('body');

    if (body) {
      body.classList.add('loading');
      setTimeout(() => {
        body.classList.remove('loading');
      }, 1200);
    }
    handleToggleMobile();
  };

  return (
    <>
      <div className="side-bar" ref={sideBar}>
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            data-name="Home"
            onClick={handleClickNav}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            data-name="About"
            onClick={handleClickNav}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul className="social">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/farid-mahmud-r-979108131/" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/Farid1987" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
      </div>
      <button className="toggle-mobile" onClick={handleToggleMobile}>
        <FontAwesomeIcon icon={faBars} color="#eaeaea" />
      </button>
    </>
  );
};

export default Sidebar;
