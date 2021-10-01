import React, {Carou} from 'react';
import './eventsDetails.css'
import { useSelector } from 'react-redux';
import { Card, Image, Button, ButtonGroup, Carousel } from 'react-bootstrap';  
import '../../Assets/audio.mp3'
import { useState } from 'react';
import image0 from "../../Assets/logoTipoNightFun.png"
import image3 from "../../Assets/photo3.png"
import image4 from "../../Assets/photo4.png"
import image5 from "../../Assets/photo5.png"
import image6 from "../../Assets/photo6.png"



export default function EventsDetails () {
    const [navigationBar, setNavigationBar] = useState('Cupom de desconto');   
  
   


    return(
        <div>
            {/*Aqui estarão as informações sobre o local do evento, enviadas pelo backend*/}
        
           <div className="logoTipoNightFun"><img className="image0" src={image0} ></img></div>
           <hr></hr>
           <div className="Information">
              <p className="Information"><b>Nome do evento:xxxxxxxx</b></p>
              <p className="Information"><b>Nome do estabelecimento:xxxxxxxx</b></p>
              <p className="Information"><b>Endereço:xxxxxxxx</b>&emsp;<b>Cep:xxxxx-xxx</b></p>
              <p className="Information"><b>Bairro:xxxxxxxx</b>&emsp;<b>Nº:xxx</b></p>
              <p className="Information"><b>Telefone:(xx)xxxxxxxxx</b></p>
           </div>
           
           <hr></hr>
           
 <div>
 <Carousel>
                
                <Carousel.Item interval={1000} >
                    <img
                    src={image3}
                   
                    />
                   
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    src={image4}
                    
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={1000} >
                    <img
                    src={image5}
                    
                    />
                  
                </Carousel.Item>
                <Carousel.Item interval={500} >
                    <img
                    src={image6}
                    
                    />
                   
                </Carousel.Item>
            </Carousel>


{/*Aqui estarão as fotos do momento do evento, enviadas pelo backend*/}
{/* Ou ficarão em forma de banner ou ficarão estática, a depender da escolha */}
</div>

 <div>
    <p><b>Gere o cupom e obtenha desconto no ingresso</b></p>

 </div>
 
 <div className="btn-group-toggle" >
                
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;
            <Button id="button" variant="outline-secondary" onClick={() => setNavigationBar("Cupom de desconto")}>
                        Cupom de desconto
                    </Button>
                    
                {/*navigationBar === 'Publicacoes' ? (
                <div >
   
                </div>) : null}
                {/*{navigationBar === 'Eventos' ? (
                <div>
                    Eventos #1
                </div>) : null} */}
            </div>
            
            
            <hr></hr>
            
            
        </div>
           
    )     
        

}