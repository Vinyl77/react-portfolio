import React from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "../components/Nav/index";
import Projects from "../components/Projects";
import BudgetTracker from "../assets/budget.png";
import WeatherDash from "../assets/dashboard.png";
import employeeTracker from "../assets/employee.png";
import noteTaker from "../assets/note2.png";
import scheduler from "../assets/scheduler.png";
import workoutTracker from "../assets/workout1.png";
import Footer from "../components/Footer/index";

function Portfolio() {

    return (
        <div>
        <Navigation />
            <Container>
                <h1>Portfolio</h1>
                <hr />
                <Row>
                    <Col md="4">
                        <Projects
                            name="Budget Tracker"
                            content="Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success."
                            img={BudgetTracker}
                            gitHub="https://github.com/Vinyl77/budget-tracker"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Note Taker"
                            content="This application can be used to write, save, and delete notes. This application uses an express.js backend to save and retrieve note data from a JSON file."
                            img={noteTaker}
                            gitHub="https://github.com/Vinyl77/note-taker"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Employee Tracker"
                            content="Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, My challenge is to architect and build a solution for managing a company's employees using node, inquirer, and MySQL."
                            img={employeeTracker}
                            gitHub="https://github.com/Vinyl77/Employee-Tracker"
                        />
                    </Col>
                </Row>
                <Row>
                    <hr />
                </Row>
                <Row>
                    <Col md="4">
                        <Projects
                            name="Workday Planner"
                            content="This workday planner has the current time, with a running clock. Each time block changes color with current, past, and future time. The save button when pressed, saves content on page to local storage. In the future I wish to have the planner reset when a new day is started.

                            "
                            img={scheduler}
                            gitHub="https://github.com/Vinyl77/Employee-Tracker"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Weather Dashboard"
                            content="Get up to date weather conditions by city search, including five day forecast."
                            img={WeatherDash}
                            gitHub="https://github.com/Vinyl77/Weather-Dashboard"
                        />
                    </Col>
                    <Col md="4">
                        <Projects
                            name="Budget Tracker"
                            content="As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled."
                            img={workoutTracker}
                            gitHub="https://github.com/Vinyl77/workout-tracker"
                        />
                    </Col>
                </Row>
            </Container>
            <hr />
            <Footer />
            </div>
    
    )
}

export default Portfolio;