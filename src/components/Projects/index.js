import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

function Projects(props) {
    const handleClick= () => {
        window.open(props.gitHub)
    }
  
return (        
    <Card className="card">
        <CardImg top width="100%" src={props.img} alt={props.name}/>
        <CardBody>
            <CardTitle tag="h5">{props.name}</CardTitle>
            <CardText>{props.content}</CardText>
            <Button onClick={handleClick}>CODE</Button>
        </CardBody>
    </Card>
    )
}     

export default Projects;