import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import logo from './logoTipoNightFun.png';
import './App.css';
import logoTipoFacebook from './logoTipoFacebook.png';

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  
  
  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  } 
 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Seja Bem Vindo Ao NightFun.
        </p>
        <FacebookLogin
          appId="573188283694881"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,email"
          callback={responseFacebook}
          icon="fa-facebook" 
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <img  src={logoTipoFacebook} alt="logoTipoFacebook.png" ></img> {/* logotipo Do facebook incluído como link */} 
        </a>
      </header>
      {login &&
            <Image src={picture} roundedCircle />
          }
      {login &&
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              {data.email}
            </Card.Text>
          </Card.Body>
        }
    </div>
  );
}

export default App;
