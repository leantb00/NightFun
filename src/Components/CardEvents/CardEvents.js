import React from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './CardEvents.css';

import image0 from '../../Assets/AglomeradosUnifor0.png'
import image00 from '../../Assets/AglomeradosUnifor1.png'
import image000 from '../../Assets/AglomeradosUni70.png'
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
            <Card.Img src={event.image_url ? event.image_url : null} alt="Card image" />
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

