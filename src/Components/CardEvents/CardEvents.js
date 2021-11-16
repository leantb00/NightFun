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
            <Card.Img src={event.banners_events ? event.banners_events.length > 0  ? event.banners_events[0].image_url : null : null} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Body className='CardTextEvents'>
                    <Card.Title>{event.title}</Card.Title>
                    <Card.Subtitle>{event.description}</Card.Subtitle>
                    <Card.Text>{address ? address : null}</Card.Text>
                </Card.Body>
            </Card.ImgOverlay>
        </Card>
    )
}