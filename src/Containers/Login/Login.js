import React, {useState} from 'react';
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
    const dispatch = useDispatch()
    const history = useHistory();
    const { dispatch:dispatchAuth } = React.useContext(AuthContext);
  
    const responseFacebook = (data) => {
      console.log(data);
      dispatch(setFacebookData(data));
      if (data.accessToken) {
        api.post("users/login/",data).then((response)=>{
          localStorage.setItem('auth-token', response.data.token) //fa8d29a5d384dc23dd71170d581d6fffa4f342bf
          // localStorage.setItem('auth-token', "fa8d29a5d384dc23dd71170d581d6fffa4f342bf")
          dispatchAuth({type:'LOGIN'})
          history.push("/home");
        }).catch((err) => {

        })

      }
    }
    const logIn = () => {
      localStorage.setItem('auth-token', "9af42d58fcfc32a322621b4cbbe62e0b7297ade9")
      dispatchAuth({type:'LOGIN'})
      history.push("/home");
    }
  return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          
         <span className="slow">Seja Bem Vindo Ao NightFun! A Plataforma Que Divulga</span>
<span className="slow">Eventos Festivos Na Sua Região E Ainda</span>
<span className="slow">Disponibiliza Cupons De Descontos </span>
<span className="slow">Na Compra Do Ingresso</span>
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
          
          <LoginModal show={loginModalVisible} onHide={() => setLoginModalVisible(false)} />
        </header>
      </div>
    );
}

export default Login;
