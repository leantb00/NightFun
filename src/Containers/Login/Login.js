import React, {useState, useEffect} from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from '../../Assets/logoTipoNightFun.png';
import { useDispatch } from 'react-redux'
import { setFacebookData } from '../../redux/reducers/login'
import { useHistory } from "react-router-dom";
import './Login.css';
import { AuthContext } from '../../AuthConfig/AuthContext' 
import api from '../../services/api'
import {Button} from 'react-bootstrap';
import LoginModal from '../../Components/LoginModal/loginModal';

function Login() {
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const { state } = React.useContext(AuthContext);
    const dispatch = useDispatch()
    const history = useHistory();
    const { dispatch:dispatchAuth } = React.useContext(AuthContext);
  

    useEffect(()=>{
      
      if(state.signed){
        history.push("/home");
      }
    }, [])

    const responseFacebook = (data) => {
      console.log(data);
      dispatch(setFacebookData(data));
      if (data.accessToken) {
        api.post("users/login/",data).then((response)=>{
          localStorage.setItem('auth-token', response.data.token) 
          dispatchAuth({type:'LOGIN'})
          history.push("/home");
        }).catch((err) => {

        })

      }
    }

    const logIn = (username, password) => {
      // localStorage.setItem('auth-token', "9af42d58fcfc32a322621b4cbbe62e0b7297ade9")
      let data = {username,password}
      api.post("users/loginwithoutFacebook/", data).then((response) => {
        localStorage.setItem('auth-token', response.data.token) 
        setLoginModalVisible(false)
        setMessageError(false)
        dispatchAuth({type:'LOGIN'})
        history.push("/home");
      }).catch((err) => {
        
        setMessageError(true)
      })
    }
    
  return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          
         <span className="slow">Seja Bem Vindo Ao NightFun! A Plataforma Que Divulga</span>
         <span className="slow">Eventos Festivos Na Sua Regi??o E Ainda</span>
         <span className="slow">Disponibiliza Cupons De Descontos </span>
         <span className="slow">Na Compra Do Ingresso</span>

        
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
         
          <Button variant="danger" onClick={() =>{setLoginModalVisible(true)}}>
              Logar sem Facebook
          </Button>
        
          

          <FacebookLogin 
            appId="573188283694881"
            fields="name,email,picture"
            scope="public_profile,email"
            callback={responseFacebook}
            icon="fa-facebook" 
          />
          
          <LoginModal show={loginModalVisible} messageError={messageError} submitOn={(username, password) => logIn(username, password)} onHide={() => setLoginModalVisible(false)} />
        </header>
      </div>
    );
}

export default Login;
