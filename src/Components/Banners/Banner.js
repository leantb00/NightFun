import React from 'react';
import { Carousel } from 'react-bootstrap';
import image from "../../Assets/photo1.jpg"
import image2 from "../../Assets/photo2.jpg"

export default function Banner() {
    
    return (
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
    )
}