import React, {Carou} from 'react';
import './establishmentDetails.css'
import { useSelector } from 'react-redux';
import { Card, Row, Col, ListGroup, Container } from 'react-bootstrap';  
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import '../../Assets/audio.mp3'
import { useState } from 'react';
import image1 from "../../Assets/photo1.jpg"
import image2 from "../../Assets/photo2.jpg"
import image3 from "../../Assets/logoTipoNightFun.png"
import { TextField } from '@material-ui/core/';



export default function EstablishmentDetails () {

const [navigationBar, setNavigationBar] = useState('Publicacoes');   
  
   return(
        <div>
            <div className="Top winter-neva-gradient">
                <div className="Name_Establishment">
                    Establishment Name
                </div>
            </div>
            <Card>
                <Card.Header as="h4">Detalhes</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Endereço: Vila Bachá 09, Meireles Fortaleza - CE
                    </Card.Text>
                    <Card.Text>
                        Telefone: (85) 98738-1058
                    </Card.Text>
                    <Card>
                        <Card.Header as="h7">Horarios de Abertura</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>segunda, 12:00 ás 18:00</ListGroup.Item>
                            <ListGroup.Item>Terca, 12:00 ás 18:00</ListGroup.Item>
                            <ListGroup.Item>Quarta, 12:00 ás 18:00</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Card.Body>
            </Card>
            <Row className="section">
                <Col xs={9}>
                    <div>
                        250 Comentarios    
                        <Card border="light" className='CommentCard' onClick={()=> {console.log("Clicked")}}>
                            <Card.Img className='CommentImage' src={"https://img2.gratispng.com/20180627/rrb/kisspng-copyleft-creative-commons-free-art-license-copyright-5b33fe5710be12.9395069815301341030686.jpg"} />
                            <Card.Body>
                                <Card.Title>Julio Felix - Um Mes atras</Card.Title>
                                <Card.Text className="CommentText">Nice Establishment Dude, I really Liked it</Card.Text>
                                <FiThumbsUp size={30}/>
                                <FiThumbsDown size={30}/>
                            </Card.Body>
                        </Card>
                        <Card border="light" className='CommentCard' onClick={()=> {console.log("Clicked")}}>
                            <Card.Img className='CommentImage' src={"https://img2.gratispng.com/20180627/rrb/kisspng-copyleft-creative-commons-free-art-license-copyright-5b33fe5710be12.9395069815301341030686.jpg"} />
                            <Card.Body>
                                <Card.Title>Julio Felix - Um Mes atras</Card.Title>
                                <Card.Text className="CommentText">Nice Establishment Dude, I really Liked it</Card.Text>
                                <FiThumbsUp size={30}/>
                                <FiThumbsDown size={30}/>
                            </Card.Body>
                        </Card>
                        <Card border="light" className='CommentCard' onClick={()=> {console.log("Clicked")}}>
                            <Card.Img className='CommentImage' src={"https://img2.gratispng.com/20180627/rrb/kisspng-copyleft-creative-commons-free-art-license-copyright-5b33fe5710be12.9395069815301341030686.jpg"} />
                            <Card.Body>
                                <Card.Title>Julio Felix - Um Mes atras</Card.Title>
                                <Card.Text className="CommentText">Nice Establishment Dude, I really Liked it</Card.Text>
                                <FiThumbsUp size={30}/>
                                <FiThumbsDown size={30}/>
                            </Card.Body>
                        </Card>
                        
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
}