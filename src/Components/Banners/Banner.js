import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-bootstrap';
import image from "../../Assets/photo1.jpg"
import image2 from "../../Assets/photo2.jpg"
import { getBanners } from "../../services/api"
import { useHistory } from "react-router-dom";
export default function Banner() {
    const [banners, setBanners] = useState([])
    const history = useHistory();
    
    useEffect(()=>{
        getBanners().then(response => {
            setBanners(response.data);
        }).catch((err)=> {

        });
    }, [])

    function goToDetails(id){
        history.push("/events/"+ id);
    } 

    return (
        <Carousel>
            {banners.map((item)=>{
                return(
                    <Carousel.Item interval={1000} onClick={() => goToDetails(item.event)}>
                        <img
                        src={item.image_url}
                        alt={item.id}
                        width="200" height="150"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                )
            })}
            
            {/* <Carousel.Item interval={500}>
                <img
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}