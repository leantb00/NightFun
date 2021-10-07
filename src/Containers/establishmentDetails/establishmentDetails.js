import React, {useEffect, useState} from 'react';
import './establishmentDetails.css'
import { useSelector } from 'react-redux';
import { Card, Row, Col, ListGroup, Form, Button } from 'react-bootstrap';  
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import '../../Assets/audio.mp3'
import { getEstablishmentbyId, postComment, getEstablishmentRank } from '../../services/api';
import { useParams } from 'react-router';
import moment from 'moment';

export default function EstablishmentDetails (props) {
    const [establishment, setEstablishment] = useState(null);  
    const [establishmentRank, setEstablishmentRank] = useState(null);  
    const [newComment, setNewComments] = useState({text:''});   
    const [infocomment, setInfocomment]= useState({comment:false});   
    const { id } = useParams();
    useEffect(()=>{
        console.log("id ||", id);
        loadPage()
    }, []);
    function loadPage() {
        getEstablishmentRank().then((response) => setEstablishmentRank(response.data.data));


        getEstablishmentbyId(id).then((response) => {
            setEstablishment(response.data);
        }).catch((err)=> {

        });
    }

    function sendComment(){
        let comment = newComment
        comment.establishment=id
        postComment(comment).then((response) =>{
            setNewComments({text:''});
            loadPage()
        }).catch((err)=> {
            console.log("err || ", err)
        });

    }
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
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Escreva seu Comentario</Form.Label>
                                    <Form.Control 
                                        onFocus={() => setInfocomment({comment:true})}  
                                        as="textarea" 
                                        rows={infocomment.comment ? 3 : 1} 
                                        value={newComment.text} onChange={(event)=>{setNewComments({...newComment,text:event.target.value})}} 
                                    />
                                    {infocomment.comment ? <div>
                                        <div>
                                            <FiThumbsUp style={newComment.linked ? {fill:'greenyellow'}:{}} size={30} onClick={() =>{setNewComments({...newComment,linked:true})}}/>
                                            <FiThumbsDown style={!newComment.linked &&  newComment.linked !== undefined ? {fill:'red'}:{}} size={30} onClick={() =>{setNewComments({...newComment,linked:false})}}/>
                                        </div>
                                        <div>
                                            <Button variant="primary" onClick={() => sendComment()}>
                                                Enviar
                                            </Button>
                                            <Button variant="danger" onClick={() =>{setInfocomment({comment:false});setNewComments('')}}>
                                                Cancelar
                                            </Button>
                                        </div>
                                    </div> : null}

                                </Form.Group>
                                
                            </Form>
                            {establishment.comment_establishment.map((comment)=>{
                                return(
                                    <Card border="light" className='CommentCard' onClick={()=> {console.log("Clicked")}}>
                                        <Card.Img className='CommentImage' src={comment.user.picture} />
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
                            <ListGroup as="ol" numbered>
                            {establishmentRank.map((item, index) => {
                                return(
                                    <ListGroup.Item as="li">{index+1}. {item.name} - {item.liked}</ListGroup.Item>
                                )
                            })}
                            </ListGroup>

                        </div>
                    </Col>
                </Row>
    
            </div>
        )     
    } else {
        return(<></>);
    }
    
}