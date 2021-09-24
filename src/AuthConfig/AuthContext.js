import React from 'react';

export const AuthContext = React.createContext();
const token = localStorage.getItem('auth-token')
let logged=false;
if(token !== 'undefined' && token !== null){
  console.log(typeof token)
  logged = true
}
const initialState = {
    signed:logged
}
function reducer(prevState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...prevState,
        signed:true,
      };
    case 'LOGOUT':
      return {
          ...prevState,
          signed:false
      };
    default:
      return prevState
  }
}

export default function AuthProvider({ children }){
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return(
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}