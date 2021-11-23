import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthConfig/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import './Header.css'
import logoTipoNightFun from '../../Assets/logoTipoNightFun.png'
import { useHistory } from "react-router-dom"

export default function Header() {
    let history = useHistory()
    const { state, dispatch } = React.useContext(AuthContext);
    function logout(){
        localStorage.removeItem("auth-token")
        dispatch({type:'LOGOUT'})
    }
    if(state.signed){
        return(
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand onClick={() => {history.push("/home")}}><img src={logoTipoNightFun} height={50} width={150}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => {history.push("/home")}}>Home</Nav.Link>
                            <Nav.Link href="/" onClick={() => logout()}>Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    } else {
        return null;
    }

}