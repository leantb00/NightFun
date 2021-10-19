import React, {useEffect} from 'react';
import './home.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import '../../Assets/audio.mp3'
import { useState } from 'react';
import { getEstablishment, getEvents } from '../../services/api';
import CardEstablishment from '../../Components/CardEstablishment/CardEstablishment';
import Banner from '../../Components/Banners/Banner';
import CardEvents from '../../Components/CardEvents/CardEvents';


export default function Home() {
    const [navigationBar, setNavigationBar] = useState('Eventos');
    const [listEstablishment, setListEstablishment] = useState([]);
    const [listEvent, setListEvent] = useState([]);
    useEffect(() => {
        switch(navigationBar){
            case 'Estabelecimento':
                establishment();
                break;
            case 'Eventos':
                events()
                break;
            default:
                console.log("teste Est")
        }
    }, [navigationBar])
    useEffect(() => {
        events();
    }, [])

    function events(){
        getEvents().then((response) =>{
            setListEvent(response.data)
        }).catch((err) => {
            // TODO:Tratamento de Error
            console.log("Error")
        })
    }
    function establishment(){
        getEstablishment().then((response) => {
            console.log(response.data)
            setListEstablishment(response.data);
        }).catch((err) => {
            // TODO:Tratamento de Error
            console.log("Error")
        })
    }
    return(
        <div>
            <Banner />
            <div className="home text-center d-flex flex-column p-5">
                <ButtonGroup size="lg" aria-label="Basic example">
                    <Button variant="outline-secondary" onClick={() => setNavigationBar("Estabelecimento")}>
                        Estabelecimento
                    </Button>
                    <Button variant="outline-secondary" onClick={() => setNavigationBar("Eventos")}>
                        Eventos
                    </Button>
                </ButtonGroup>
                <div className='lista p-10'>
                    {navigationBar === "Estabelecimento" ? 
                        listEstablishment.map((item) => {
                            return <CardEstablishment key={item.id} data={item}/>
                        }) :
                        listEvent.map((item) => {
                            return <CardEvents key={item.id} data={item} />;
                        })
                    }
                </div>
            </div>
             
        </div>
           
    )     
        

}

