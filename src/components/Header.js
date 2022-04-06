import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="Header">
      <nav className="Navbar">
        <Link to="/ghibli-fims-store/">
          <FontAwesomeIcon icon={faAngleLeft} className="Icon FirstIcon" />
        </Link>
        <h2>GHIBLI FILMS STORE</h2>
        <div className="IconContainer" />
      </nav>
    </header>
  );
}

export default Header;
