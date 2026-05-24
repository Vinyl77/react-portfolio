import { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import Begin from '../assets/shore.jpg';
import Resume from '../assets/updated_resume.pdf';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';

function Contact() {
  const [status, setStatus] = useState('');

  const submitForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    } catch {
      setStatus('ERROR');
    }
  };

  return (
    <div>
      <Navigation />
      <Container className="contact">
        <h1>Contact Me</h1>
        <hr />
        <Card>
          <Card.Img
            variant="top"
            src={Begin}
            alt="yasujiro ozu directing a scene"
          />
          <Card.Body className="contact-card">
            <Form
              onSubmit={submitForm}
              action="https://formspree.io/f/mvodrajg"
              method="POST"
            >
              <Form.Group className="mb-3" controlId="contact-name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contact-email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="contact-message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" />
              </Form.Group>
              {status === 'SUCCESS' ? (
                <p>Thanks!</p>
              ) : (
                <Button type="submit">Submit</Button>
              )}
              {status === 'ERROR' && <p>Ooops! There was an error.</p>}
            </Form>
          </Card.Body>
        </Card>
        <div className="resume-cta">
          <a
            className="resume-btn"
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            download="Richard-Yvarra-Resume.pdf"
          >
            <FontAwesomeIcon icon={faFileArrowDown} />
            <span>View Resume</span>
          </a>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Contact;
