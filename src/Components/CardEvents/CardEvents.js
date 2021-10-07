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
        <Card className='Card' onClick={()=> {goToDetails()}}>
            <Card.Img className='CardImg' src={event.image_url} alt={event.description} />
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.description}</Card.Subtitle>
                <Card.Text>{address ? address : null}</Card.Text>
            </Card.Body>
            {/* <Card.Body>
                
            </Card.Body> */}
        </Card>
    )
}