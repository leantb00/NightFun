import React, { useEffect } from 'react';
import './eventsDetails.css'
import { useSelector } from 'react-redux';
import { Card, Image, Button, Carousel } from 'react-bootstrap';  
import '../../Assets/audio.mp3'
import { useState } from 'react';
import { useParams } from 'react-router';
import image0 from "../../Assets/logoTipoNightFun.png"
import image3 from "../../Assets/photo3.png"
import image4 from "../../Assets/photo4.png"
import image5 from "../../Assets/photo5.png"
import image6 from "../../Assets/photo6.png"
import { getEventsbyId } from '../../services/api';
import CardEstablishment from '../../Components/CardEstablishment/CardEstablishment';

export default function EventsDetails () {
    const [event, setEvent] = useState(null);   
    const { id } = useParams();
    useEffect(()=> {
        getEventsbyId(id).then((response) => {
            setEvent(response.data);
        }).catch((err)=> {

        });
    },[id])


    return(
        <div>
            <Carousel>
                {event !== null && event.banners_events.map((item, index)=>{
                    return (<Carousel.Item interval={1000} >
                        <img src={item.image_url} alt={event.description}/>
                    </Carousel.Item>)
                })}
                
            </Carousel>
            {event !== null ? 
            <Card border="light" >
                <Card.Header as="h4">
                    {event.title}
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {event.description}
                    </Card.Text>
                    <Card.Text>
                        {event.address}
                    </Card.Text>
                    <Card >
                        <Card.Header>Estabelecimento</Card.Header>
                        {event.establishment ? <CardEstablishment data={event.establishment}/> : null}
                    </Card>
                    
                </Card.Body>
            </Card> : null}
        </div>
           
    )     
        

}