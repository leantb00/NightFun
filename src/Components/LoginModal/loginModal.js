import {Modal, Form, Button} from 'react-bootstrap';
import React, {useEffect, useState} from 'react';

export default function LoginModal(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword]= useState("");   
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email"
                     placeholder="Usuario"  
                     value={username} 
                     onChange={(event)=>{setUsername(event.target.value)}} 
                    />


                    <Form.Text className="text-muted">
                    We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                        value={password} 
                        onChange={(event)=>{setPassword(event.target.value)}} 
                    />
                </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.onSubmit}>
                Enviar
            </Button>
        </Modal.Footer>
      </Modal>
    );
  }