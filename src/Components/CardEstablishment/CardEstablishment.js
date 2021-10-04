import React from "react";
import { Card } from 'react-bootstrap';
import './CardEstablishment.css';
import { useHistory } from "react-router-dom";

export default function CardEstablishment(data) {
    let address;
    let establishment = data.data
    const history = useHistory();
    if(establishment){
        address = establishment.address.street + ','+ establishment.address.number +' '+ establishment.address.neighborhood + ', ' + establishment.address.city + ' - ' + establishment.address.state
    }

    function goToDetails(){
        history.push("/establishment/"+establishment.id);
    } 

    return(
        <Card className='Card' onClick={()=> goToDetails()}>
            <Card.Body>
                <Card.Title>{establishment.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{address ? address : null}</Card.Subtitle>
                <Card.Text>{establishment.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}