import React from "react";
import { Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import './CardEvents.css';

import image0 from '../../Assets/AglomeradosUnifor0.png'
import image00 from '../../Assets/AglomeradosUnifor1.png'
import image000 from '../../Assets/AglomeradosUni70.png'
export default function CardEvents(data) {
    console.log("data || ", data)
    let event = data.data
    let address = event.address;
    const history = useHistory();
    function goToDetails(){
        history.push("/events/"+event.id);
        
    } 




    return(


        <div class="card-rows"  onClick={()=> {goToDetails()}}>
      
      <div  class="text-center" >
            <img  src={event.image_url}  alt={event.description} />
           </div>
            <div class="card">
            <div class="card-header">
                <div class="card-body">
                    <p class="card-title">{event.Title}</p>
                    <p class="card-text">{event.description}</p>
                    <p class="card-text">{address ? address : null}</p>
                </div>
            </div>
    
       </div>
</div>




















    )
}

