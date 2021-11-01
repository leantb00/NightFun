import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from './AuthContext';
export default function PrivateRoute({ children, ...rest }) {
    const { state } = React.useContext(AuthContext);
    console.log('STATE || ',state);
    
    if(state.signed){
      return (
        <Route
          {...rest}
          render={({ location }) =>
              children
          }
        />
      );
    } else {
       <Redirect to="/" />
    }
  }
