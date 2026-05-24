import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import ArclightShot from '../assets/arclight.png';
import './Portfolio.css';

const PROJECT = {
  name: 'ArcLight Analytics',
  tagline: 'Data analytics & research consultancy.',
  url: 'https://arclightanalytics.com/',
  role: 'Webmaster & Web Designer',
  client: 'ArcLight Analytics',
  type: 'Live Production Site',
};

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Navigation />
      <Container className="portfolio-container">
        <header className="portfolio-header">
          <span className="portfolio-eyebrow">Selected Work</span>
          <h1 className="portfolio-headline">
            {PROJECT.name}
            <span className="accent">.</span>
          </h1>
          <p className="portfolio-tagline">{PROJECT.tagline}</p>
        </header>

        <a
          className="portfolio-shot-link"
          href={PROJECT.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${PROJECT.name} live site`}
        >
          <div className="portfolio-shot">
            <img
              src={ArclightShot}
              alt={`${PROJECT.name} website screenshot`}
              loading="lazy"
            />
            <span className="portfolio-shot-overlay">
              Visit Live Site
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </div>
        </a>

        <Row className="g-4 portfolio-info">
          <Col md="5" lg="4">
            <aside className="portfolio-meta">
              <div className="portfolio-meta-row">
                <span className="portfolio-meta-label">Role</span>
                <span className="portfolio-meta-value">{PROJECT.role}</span>
              </div>
              <div className="portfolio-meta-row">
                <span className="portfolio-meta-label">Client</span>
                <span className="portfolio-meta-value">{PROJECT.client}</span>
              </div>
              <div className="portfolio-meta-row">
                <span className="portfolio-meta-label">Type</span>
                <span className="portfolio-meta-value">{PROJECT.type}</span>
              </div>
              <a
                className="portfolio-visit-btn"
                href={PROJECT.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </aside>
          </Col>
          <Col md="7" lg="8">
            <section className="portfolio-about">
              <div className="portfolio-section-header">
                <h2>About ArcLight</h2>
              </div>
              <p>
                ArcLight Analytics was founded by Dr. Evan Johnson, a
                researcher with the University of North Carolina at Chapel
                Hill with over ten years of experience in quantitative
                research and policy analysis. Dr. Johnson has a passion for
                using quantitative research and data analytics tools to solve
                problems in policy and management, and has recruited a team
                of like-minded analysts that make up ArcLight Analytics.
              </p>
              <p>
                Dr. Johnson and his team at ArcLight are skilled in data
                analytics, data visualization, geospatial analysis, and
                programming. Their work benefits clients in the public,
                private, and academic sectors looking to solve problems and
                improve strategy using large datasets. They employ a variety
                of analytical tools to perform program evaluation and causal
                inference; econometric analysis and data manipulation; and
                exploratory data analysis.
              </p>
              <p>
                The team at ArcLight believes that careful analysis of large
                datasets can shed light on important trends and insights into
                how an organization&apos;s strategy is working in practice.
                Their goal is to bring a rigorous academic approach to data
                analysis, allowing organizations to make the most informed
                decisions moving forward.
              </p>

              <div className="portfolio-section-header portfolio-section-header--secondary">
                <h2>My Contribution</h2>
              </div>
              <p>
                I serve as the webmaster for ArcLight Analytics and designed
                the website you see at{' '}
                <a
                  href={PROJECT.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arclightanalytics.com
                </a>
                . The site reflects ArcLight&apos;s rigorous, research-driven
                identity while remaining approachable for clients across the
                public, private, and academic sectors.
              </p>
            </section>
          </Col>
        </Row>

        <div className="portfolio-cta">
          <Link
            to="/about"
            className="portfolio-cta-btn portfolio-cta-btn--secondary"
          >
            About Me
          </Link>
          <Link
            to="/contact"
            className="portfolio-cta-btn portfolio-cta-btn--primary"
          >
            Get In Touch
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Portfolio;
