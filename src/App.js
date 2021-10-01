import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Containers/Login/Login';
import Home from './Containers/Home/Home'
import Header from './Components/Header/Header';
import AuthProvider from './AuthConfig/AuthContext';
import PrivateRoute from './AuthConfig/PrivateRoute';
import './App.css'
//import EstablishmentDetails from './Containers/establishmentDetails/establishmentDetails';
import EventsDetails from './Containers/eventsDetails/eventsDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <PrivateRoute exact path="/home" >   
              <EventsDetails/>
              {/*<EstablishmentDetails/>*/}
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;