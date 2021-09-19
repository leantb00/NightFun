import React from 'react';
import './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Containers/Login/Login';
import Home from './Home.js'
import AuthProvider from './AuthConfig/AuthContext';
import PrivateRoute from './AuthConfig/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul> */}

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <PrivateRoute exact path="/home" >
              <Home/>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;