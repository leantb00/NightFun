import React from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './CardEvents.css';

export default function CardEvents(data) {
    console.log("data || ", data)
    let event = data.data
    let address = event.address;
    const history = useHistory();
    function goToDetails(){
        history.push("/events/"+event.id);
    } 

    return(
        <Card.Body className='Card' onClick={()=> {goToDetails()}}>
           &nbsp;
         
            <Card.Body  >
                &nbsp;
                <Card.Title className="CardDescription">{event.title}</Card.Title>
                <Card.Subtitle className="CardDescription">{event.description}</Card.Subtitle>
                <Card.Text className="CardDescription">{address ? address : null}</Card.Text>
            </Card.Body>
            {/* <Card.Body>
                
            </Card.Body> */}
        </Card.Body>
    )
}