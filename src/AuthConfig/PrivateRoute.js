import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from './AuthContext';
export default function PrivateRoute({ children, ...rest }) {
    const { state } = React.useContext(AuthContext);
    console.log('STATE || ',state);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        state.signed ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }