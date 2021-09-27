import React from "react";
import { Card } from 'react-bootstrap';
import './CardEstablishment.css';

export default function CardEstablishment(data) {
    let address;
    let establishment = data.data
    if(establishment){
        address = establishment.address.street + ','+ establishment.address.number +' '+ establishment.address.neighborhood + ', ' + establishment.address.city + ' - ' + establishment.address.state
    }
    return(
        <Card className='Card' onClick={()=> {console.log("Clicked")}}>
            <Card.Body>
                <Card.Title>{establishment.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{address ? address : null}</Card.Subtitle>
                <Card.Text>{establishment.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}