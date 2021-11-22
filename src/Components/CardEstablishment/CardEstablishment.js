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
        <Card className="card mb-3"  onClick={()=> goToDetails()}>
          <Card.Header>
            <Card.Body>
                <Card.Title className="CardDescription">{establishment.name}</Card.Title>
                <Card.Subtitle className="CardDescription">{address ? address : null}</Card.Subtitle>
                <Card.Body className="CardDescription">{establishment.description}</Card.Body>
            </Card.Body>
          </Card.Header>
        </Card>
    )
}