import React, {Carou} from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Card, Image, Button, ButtonGroup, Carousel } from 'react-bootstrap';
import '../../Assets/audio.mp3'
import { useState } from 'react';
import image from "../../Assets/photo1.jpg"
import image2 from "../../Assets/photo2.jpg"
export default function Home() {
    const [navigationBar, setNavigationBar] = useState('Estabelecimento');

    return(
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    src={image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="home text-center d-flex flex-column p-2">
                <ButtonGroup size="lg" aria-label="Basic example">
                    <Button variant="outline-secondary" onClick={() => setNavigationBar("Estabelecimento")}>
                        Estabelecimento
                    </Button>
                    <Button variant="outline-secondary" onClick={() => setNavigationBar("Eventos")}>
                        Eventos
                    </Button>
                </ButtonGroup>
                <div className='lista p-10'>
                    <Card className='Card'>
                        <Card.Body>
                            <Card.Title>Estabelecimento #1</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Vila Bachá 09</Card.Subtitle>
                            <Card.Text>Lorem Impsum</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='Card'>
                        <Card.Body>
                            <Card.Title>Estabelecimento #2</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Vila Bachá 09</Card.Subtitle>
                            <Card.Text>Lorem Impsum</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                {/* {navigationBar === 'Estabelecimento' ? (
                <div>
                    Estabelecimentos #1
                </div>) : null}
                {navigationBar === 'Eventos' ? (
                <div>
                    Eventos #1
                </div>) : null} */}
            </div>
        </div>
           
    )     
        

}

