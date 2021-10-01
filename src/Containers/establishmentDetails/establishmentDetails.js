import React, {Carou} from 'react';
import './establishmentDetails.css'
import { useSelector } from 'react-redux';
import { Card, Image, Button, ButtonGroup, Carousel } from 'react-bootstrap';  
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
            {/*Aqui estarão as informações sobre o estabelecimento, enviadas pelo backend*/}
           <div className="logoTipoNightFun"><img className="image0" src={image3} ></img></div>
           <hr></hr>
           <div className="Information">
              <p className="Information"><b>Nome do estabelecimento:xxxxxxxx</b></p>
              <p className="Information"><b>Endereço:xxxxxxxx</b>&emsp;<b>Cep:xxxxx-xxx</b></p>
              <p className="Information"><b>Bairro:xxxxxxxx</b>&emsp;<b>Nº:xxx</b></p>
              <p className="Information"><b>Telefone:(xx)xxxxxxxxx</b></p>
           </div>
           <hr></hr>
           
 <div>
     
     <TextField 


variant='filled'
placeholder='Comentários'
multiline
rows={5}
rowsMax={5}
size='medium'
name='name'

/></div>



<Button id='id1' variant="outline-secondary" onClick={() => setNavigationBar("publicacoes")}>
                        Publicar
                    </Button>

<div className="home text-center d-flex flex-column p-2">
              
                <div className='lista p-10'>
                  
                </div>
                 {/*navigationBar === 'Publicacoes' ? (
                <div >
   
                </div>) : null}
                {/*{navigationBar === 'Eventos' ? (
                <div>
                    Eventos #1
                </div>) : null} */}
            </div>
            <hr></hr>
            <div className="footer"><img className="image1" src={image3} ></img></div>
        </div>
           
    )     
        

}