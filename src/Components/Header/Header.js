import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthConfig/AuthContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import './Header.css'

export default function Header() {
    const { state, dispatch } = React.useContext(AuthContext);
    function logout(){
        localStorage.removeItem("auth-token")
        dispatch({type:'LOGOUT'})
    }
    if(state.signed){
        return(
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/home">NightFun</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
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