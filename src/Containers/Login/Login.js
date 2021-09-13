import React from 'react';
import FacebookLogin from 'react-facebook-login';
import logo from '../../Assets/logoTipoNightFun.png';
import { useDispatch } from 'react-redux'
import { setFacebookData } from '../../redux/reducers/login'
import { useHistory } from "react-router-dom";
import './Login.css';
import { AuthContext } from '../../AuthConfig/AuthContext' 
function Login() {
    const dispatch = useDispatch()
    const history = useHistory();
    const { dispatch:dispatchAuth } = React.useContext(AuthContext);
  
    const responseFacebook = (response) => {
      console.log(response);
      dispatch(setFacebookData(response));
      // setData(response);
      // setPicture(response.picture.data.url);
      if (response.accessToken) {
        dispatchAuth({type:'LOGIN'})
        history.push("/home");
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
