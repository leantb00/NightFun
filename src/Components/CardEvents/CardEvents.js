import React from "react";
import { Card } from 'react-bootstrap';
import image from "../../Assets/photo1.jpg"
import './CardEvents.css';

export default function CardEvents(data) {
    console.log("data || ", data)
    let event = data.data
    let address = event.address;
    return(
        <Card className='Card' onClick={()=> {console.log("Clicked")}}>
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