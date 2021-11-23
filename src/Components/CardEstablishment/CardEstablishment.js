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
        <Card className="Card"  onClick={()=> goToDetails()}>
            <Card.Body>
                <Card.Title>{establishment.name}</Card.Title>
                <Card.Subtitle>{address ? address : null}</Card.Subtitle>
                <Card.Body>{establishment.description}</Card.Body>
            </Card.Body>
        </Card>
    )
}