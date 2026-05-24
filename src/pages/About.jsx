import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import ProfilePic from '../assets/new_pic.jpg';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import './About.css';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    skills: [
      'TypeScript',
      'JavaScript (ES6+)',
      'Java',
      'Python',
      'SQL',
      'HTML5',
      'CSS3',
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'React 19',
      'Node.js',
      'Spring Boot',
      'Express.js',
      'Vite',
      'Angular',
      'Bootstrap',
    ],
  },
  {
    title: 'Cloud & Databases',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'NoSQL',
      'AWS',
      'IBM Cloud',
      'Kubernetes',
      'Docker',
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      'GitHub Actions (CI/CD)',
      'Cypress',
      'RESTful APIs',
      'GraphQL',
      'Git',
      'Jira',
      'Vercel',
    ],
  },
  {
    title: 'Specialized',
    skills: [
      'AI / LLM Integration (RAG)',
      'Agile / Scrum Leadership',
      'Microservice Architecture',
      'Cybersecurity Remediation',
      'CI / CD',
    ],
  },
];

const STATS = [
  { value: '4.0', label: 'Bootcamp GPA' },
  { value: '14+', label: 'Certifications Earned' },
  { value: '20+', label: 'Years Work Ethic' },
];

const COURSEWORK = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'Express.js',
  'React.js',
  'Node.js',
  'MongoDB',
  'MySQL',
  'Git',
  'C#',
  'ASP.NET',
  'Database Theory',
  'Agile Methodology',
  'Progressive Web Apps',
];

const CERTIFICATIONS = [
  {
    year: '2024',
    items: [
      { name: 'Artificial Intelligence Fundamentals', issuer: 'IBM' },
      {
        name: 'Enterprise Design Thinking Team Essentials for AI',
        issuer: 'IBM',
      },
    ],
  },
  {
    year: '2023',
    items: [{ name: 'AI Fundamentals, Level 1', issuer: 'IBM' }],
  },
  {
    year: '2022',
    items: [
      { name: 'Software Apprenticeship Program', issuer: 'IBM' },
      { name: 'Containers and Kubernetes', issuer: 'IBM' },
      { name: 'Cloud Essentials', issuer: 'IBM' },
      { name: 'Dockers Essentials', issuer: 'IBM' },
    ],
  },
  {
    year: '2021',
    items: [
      { name: 'Cloud Core', issuer: 'IBM' },
      { name: 'Agile Explore', issuer: 'IBM' },
      { name: 'Enterprise Design Thinking Co-Creator', issuer: 'IBM' },
      { name: 'Enterprise Design Thinking Practitioner', issuer: 'IBM' },
      { name: 'Big Data 101', issuer: 'IBM' },
      { name: 'Developer First Year', issuer: 'IBM' },
      { name: 'Complete JavaScript', issuer: 'Udemy' },
    ],
  },
];

const MEDIA = [
  {
    outlet: 'Le Monde',
    type: 'Interview',
    date: 'September 21, 2022',
    title:
      'In the United States, workers and blue-collar workers are investing in high-tech',
    note: 'Translated from French',
    cta: 'Read article',
    url: 'https://www.lemonde.fr/emploi/article/2022/09/21/aux-etats-unis-ouvriers-et-travailleurs-manuels-investissent-la-high-tech_6142503_1698637.html',
  },
  {
    outlet: 'MarketWatch',
    type: 'Podcast',
    date: 'May 19, 2022',
    title: "No college degree? \u2018No problem,\u2019 say more and more employers",
    cta: 'Watch episode',
    url: 'https://www.youtube.com/watch?v=dFJWQhJnwsQ',
  },
];

const About = () => {
  return (
    <div className="about-page">
      <Navigation />
      <Container className="about-container">
        <header>
          <span className="about-eyebrow">About Me</span>
          <h1 className="about-headline">
            Richard Yvarra<span className="accent">.</span>
          </h1>
          <p className="about-subhead">
            Software Engineer at{' '}
            <a
              className="about-subhead-link"
              href="https://servicetrade.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ServiceTrade
            </a>
            <span className="about-subhead-divider">/</span>
            Based in New Haven, Connecticut.
          </p>
        </header>

        <Row className="g-4 align-items-start">
          <Col md="5" lg="4">
            <div className="about-profile-frame">
              <img
                className="about-profile-pic"
                src={ProfilePic}
                alt="Portrait of Richard Yvarra"
                loading="lazy"
              />
            </div>
            <ul className="about-contact">
              <li>
                <a
                  href="mailto:richard.yvarra@gmail.com"
                  aria-label="Email Richard"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>richard.yvarra@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/richard-yvarra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span>linkedin.com/in/richard-yvarra</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col md="7" lg="8">
            <div className="about-profile-wrapper">
              <div className="about-bio">
                <h2>The Story</h2>
                <p>
                  I&apos;m currently a Software Engineer at{' '}
                  <a
                    href="https://servicetrade.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ServiceTrade
                  </a>
                  , building production web applications across the stack
                  &mdash; TypeScript and React on the front end, with Node.js,
                  Spring Boot, and microservices on the back, deployed on AWS,
                  IBM Cloud, and Kubernetes.
                </p>
                <p>
                  My current focus is integrating AI and LLM capabilities (RAG
                  patterns, agent workflows) into real applications, while
                  staying grounded in the fundamentals: clean APIs, accessible
                  UIs, and CI/CD that actually ships.
                </p>
                <p>
                  Before code, I spent more than twenty years in retail
                  operations. That background gave me a work ethic that carries
                  into every PR &mdash; show up, do it right, ship it.
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <section className="about-stats" aria-label="At a glance">
          <Row className="g-0">
            {STATS.map((stat) => (
              <Col xs="12" md="4" key={stat.label}>
                <div className="about-stat">
                  <span className="about-stat-value">{stat.value}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <section
          className="about-section"
          aria-labelledby="education-heading"
        >
          <div className="about-section-header">
            <h2 id="education-heading">Education</h2>
          </div>
          <div className="education-card">
            <div className="education-card-header">
              <div>
                <h3 className="education-school">
                  UNC Chapel-Hill Boot Camps
                </h3>
                <p className="education-program">
                  Full-Stack Developer Certificate
                </p>
              </div>
              <div className="education-meta">
                <span className="education-date">July 2021</span>
                <span className="education-gpa">
                  GPA <strong>4.0</strong>
                </span>
              </div>
            </div>
            <p className="education-location">Chapel Hill, NC</p>
            <div className="education-coursework">
              <span className="education-coursework-label">Coursework</span>
              <div className="skill-chips">
                {COURSEWORK.map((course) => (
                  <span className="skill-chip" key={course}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" aria-labelledby="skills-heading">
          <div className="about-section-header">
            <h2 id="skills-heading">Skills &amp; Technical Tools</h2>
          </div>
          <Row className="g-4">
            {SKILL_GROUPS.map((group) => (
              <Col xs="12" md="6" lg="4" key={group.title}>
                <div className="skill-group">
                  <div className="skill-group-title">{group.title}</div>
                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <section
          className="about-section"
          aria-labelledby="certs-heading"
        >
          <div className="about-section-header">
            <h2 id="certs-heading">Further Education</h2>
          </div>
          <div className="cert-timeline">
            {CERTIFICATIONS.map((entry) => (
              <div className="cert-row" key={entry.year}>
                <div className="cert-year">{entry.year}</div>
                <ul className="cert-list">
                  {entry.items.map((item) => (
                    <li key={item.name} className="cert-item">
                      <span className="cert-name">{item.name}</span>
                      <span className="cert-issuer">{item.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          className="about-section"
          aria-labelledby="press-heading"
        >
          <div className="about-section-header">
            <h2 id="press-heading">Press &amp; Media</h2>
          </div>
          <ul className="press-list">
            {MEDIA.map((m) => (
              <li key={m.url} className="press-item">
                <a
                  className="press-link"
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="press-meta">
                    <span className="press-type">{m.type}</span>
                    <span className="press-date">{m.date}</span>
                  </div>
                  <div className="press-outlet">{m.outlet}</div>
                  <p className="press-title">&ldquo;{m.title}&rdquo;</p>
                  {m.note && <p className="press-note">{m.note}</p>}
                  <span className="press-cta">
                    {m.cta}
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="about-cta">
          <Link
            to="/portfolio"
            className="about-cta-btn about-cta-btn--primary"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="about-cta-btn about-cta-btn--secondary"
          >
            Get In Touch
          </Link>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
