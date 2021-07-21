import  React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, FormGroup, Label, Input } from "reactstrap";
import Begin from "../assets/shore.jpg";
import Resume from "../assets/resume3.pdf";
import Navigation from "../components/Nav/index"
import Footer from "../components/Footer/index";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <div>
            <Navigation />
            <Container className="contact">
                <h1>Contact Me</h1>
                <hr />
                <Card>
                    <CardImg top width="100%" src={Begin} alt="yasujiro ozu directing a scene"/>
                    
                    <CardBody className="contact-card">
                        <form
                            onSubmit={this.submitForm}
                            action="https://formspree.io/f/mvodrajg"
                            method="POST"
                        >
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email Address</Label>
                            <Input type="text" name="email" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Message</Label>
                            <Input type="textarea" name="message" />
                        </FormGroup>
                        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </form>
                    </CardBody>
                </Card>
                <Row>
                    <Col className="resume" md="12">View my resume here: <button className="resume-button" onClick={() => window.open(Resume)}>Resume</button></Col>
                </Row>
            </Container>
            <Footer />
            </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Contact;