import React from 'react';
import './home.css';
import { useSelector } from 'react-redux';
import { Card, Image, Button } from 'react-bootstrap';
import './audio.mp3'

import { useState } from 'react';
export default function Home() {
    function execSom(){
    const mediaElem = document.getElementById("#oi");
    mediaElem.play();
    }
    return(
        
        
        <body onLoad="execSom()">    
         <div className='container' ><img  className="containerImg" ></img>
        

        </div>
        
        <audio id="oi" src="./audio.mp3" autoplay>
  O seu navegador não suporta o elemento <code>audio</code>.
</audio>
	


	 
	

           
           

           
  
          </body>
           
    )     
        

}

