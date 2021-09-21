import React from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from '../../Assets/logoTipoNightFun.png';
import { useDispatch } from 'react-redux'
import { setFacebookData } from '../../redux/reducers/login'
import { useHistory } from "react-router-dom";
import './Login.css';
import { AuthContext } from '../../AuthConfig/AuthContext' 
import api from '../../services/api'

function Login() {
    const dispatch = useDispatch()
    const history = useHistory();
    const { dispatch:dispatchAuth } = React.useContext(AuthContext);
  
    const responseFacebook = (data) => {
      console.log(data);
      dispatch(setFacebookData(data));
      if (data.accessToken) {
        api.post("users/login/",data).then((response)=>{
          console.log(response);
          dispatchAuth({type:'LOGIN'})
          history.push("/home");
        }).catch((err) => {

        })

      }
    } 
  return (
      <div className="Login">
        <header className="Login-header">
          <img src={logo} className="Login-logo" alt="logo" />
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
        </header>
      </div>
    );
}

export default Login;
