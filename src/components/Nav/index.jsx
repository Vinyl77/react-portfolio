import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

const Navigation = () => {
  return (
    <Nav className="justify-content-center" id="top-nav">
      <Nav.Item>
        <Nav.Link as={Link} className="nav-link" to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} className="nav-link" to="/about">
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} className="nav-link" to="/portfolio">
          My Work
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} className="nav-link" to="/contact">
          Contact Me
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navigation;
