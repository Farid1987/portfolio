import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.style.scss';
import Logo from '../../assets/images/Logo3-transparent.png';

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} data-name="Home">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)} data-name="About">
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
  );
};

export default Sidebar;
