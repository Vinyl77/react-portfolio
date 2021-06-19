import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import ProfilePic from "../assets/richardyvarra.jpg"; 
import Navigation from "../components/Nav/index";
import Footer from "../components/Footer/index";
import "../App.css";

const About = () => {
    return (
        <div>
        {/* <Hero /> */}
        <Navigation />
        <Container className="container">
            <h1>About Me</h1>
            <hr />
           <Row>
               <Col md="6">
                   <Image className="profile-pic" src={ProfilePic} alt="Richard Yvarra" style={{
                       height: 300,
                       width: 250
                   }} thumbnail />
                </Col>
                <Col md="6">
                    <div className="bio">
                        <h5>Hi! I'm Richard, a web developer based in New Haven, Connecticut.</h5>
                        <p> I have worked in the grocery industry for over twenty years.
            After numerous injuries and aging gracefully, I've decided to seek a new path.
            Web development has always been an interest to me, but the thought of learning many
            languages of technology was overwhelming. So I took the leap and enrolled in boot camp.
            Now, I am here showing off my work.
                        </p>
                    </div>  
                </Col>
            </Row>
            <Row>
                <Col md="4"></Col>
                <Col md="4">
                <h2>Skills</h2>
                </Col>
                <Col md="4"></Col>
            </Row>
            <hr />
            <Row>
                <Col md="3"></Col>
                <Col md="3">
                    <ul>
                        <li>JavaScript(ES6)</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>AJAX</li>
                        <li>JQuery</li>
                    </ul>
                </Col>
                <Col md="1"></Col>
                <Col md="3">   
                    <ul>   
                        <li>NodeJS</li>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Git</li>
                    </ul>
                </Col>  
            </Row>
            <hr />
           </Container>
           <Footer />
        </div>   
    )
}

export default About;