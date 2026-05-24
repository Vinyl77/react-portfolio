import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './style.css';

const SOCIAL_LINKS = [
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/richard-yvarra-205131205/',
    label: 'LinkedIn',
  },
  {
    icon: faGithub,
    url: 'https://github.com/Vinyl77',
    label: 'GitHub',
  },
  {
    icon: faInstagram,
    url: 'https://www.instagram.com/archive77/?hl=en',
    label: 'Instagram',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/RYDEV77',
    label: 'Twitter',
  },
];

function Footer() {
  return (
    <footer className="text-center fixed-bottom footer">
      <div className="footer">
        <p className="social">
          {SOCIAL_LINKS.map(({ icon, url, label }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} size="2x" />
            </a>
          ))}
        </p>
        <p className="col-sm-12 copyright">&copy; 2021 Richard Yvarra</p>
        <p>Main Image Photo By William Eggleston</p>
        <p>Contact Form Image By Stephen Shore</p>
      </div>
    </footer>
  );
}

export default Footer;
