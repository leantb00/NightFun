import React from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from '../../Assets/logoTipoNightFun.png';
import { useDispatch } from 'react-redux'
import { setFacebookData } from '../../redux/reducers/login'
import { useHistory } from "react-router-dom";
import './Login.css';
import { AuthContext } from '../../AuthConfig/AuthContext' 
import api from '../../services/api'
import {Button} from 'react-bootstrap';

function Login() {
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
      localStorage.setItem('auth-token', "fa8d29a5d384dc23dd71170d581d6fffa4f342bf")
      dispatchAuth({type:'LOGIN'})
      history.push("/home");
    }
  return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
          <p>
            Seja Bem Vindo Ao NightFun.
          </p>
          <Button variant="danger" onClick={() =>{logIn()}}>
              Logar sem Facebook
          </Button>
          <FacebookLogin
            appId="573188283694881"
            fields="name,email,picture"
            scope="public_profile,email"
            callback={responseFacebook}
            icon="fa-facebook" 
          />
        </header>
      </div>
    );
}

export default Login;
