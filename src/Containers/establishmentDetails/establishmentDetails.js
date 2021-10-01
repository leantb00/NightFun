import React, {useEffect, useState} from 'react';
import './establishmentDetails.css'
import { useSelector } from 'react-redux';
import { Card, Row, Col, ListGroup, Container } from 'react-bootstrap';  
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import '../../Assets/audio.mp3'
import { getEstablishmentbyId } from '../../services/api';
import { useParams } from 'react-router';
import moment from 'moment';

export default function EstablishmentDetails (props) {
    const [establishment, setEstablishment] = useState(null);   
    const { id } = useParams();
    useEffect(()=>{
        
        console.log("id ||", id);
        getEstablishmentbyId(id).then((response) => {
            setEstablishment(response.data);
        }).catch((err)=> {

        });
    }, []);
    if(establishment !== null){
        return(
            <div>
                <div className="Top winter-neva-gradient">
                    <div className="Name_Establishment">
                        {establishment.name}
                    </div>
                </div>
                <Card>
                    <Card.Header as="h4">Detalhes</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Endereço:{establishment.address.street} {establishment.address.number}, {establishment.address.neighborhood} {establishment.address.city} {establishment.address.state}
                        </Card.Text>
                        <Card.Text>
                            Telefone: {establishment.phone}
                        </Card.Text>
                        <Card>
                            <Card.Header as="h7">Horarios de Abertura</Card.Header>
                            <ListGroup variant="flush">
                                {establishment.sch_establishment.map((item, idx) => {
                                    return (<ListGroup.Item>{item.day_week}, {item.shift} - {item.sch_begin_shift} ás {item.sch_end_shift} </ListGroup.Item>)
                                })}
                            </ListGroup>
                        </Card>
                    </Card.Body>
                </Card>
                <Row className="section">
                    <Col xs={9}>
                        <div>
                            {establishment.comment_establishment.length} Comentarios
                            {establishment.comment_establishment.map((comment)=>{
                                return(
                                    <Card border="light" className='CommentCard' onClick={()=> {console.log("Clicked")}}>
                                        <Card.Img className='CommentImage' src={"https://img2.gratispng.com/20180627/rrb/kisspng-copyleft-creative-commons-free-art-license-copyright-5b33fe5710be12.9395069815301341030686.jpg"} />
                                        <Card.Body>
                                            <Card.Title>{comment.user.full_name} - {moment(comment.createAt).fromNow()}</Card.Title>
                                            <Card.Text className="CommentText">{comment.text}</Card.Text>
                                            {comment.linked ? (<FiThumbsUp size={30}/>) : (<FiThumbsDown size={30}/>)}
                                        </Card.Body>
                                    </Card>
                                )
                            })}  
                            
                        </div>
                    </Col>
                    <Col>
                        <div>
                            Ranking de Estabelecimentos
                        </div>
                    </Col>
                </Row>
    
            </div>
        )     
    } else {
        return(<></>);
    }
    
}