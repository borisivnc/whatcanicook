import React, { useState, useEffect} from 'react'
import '../css/login.css'
import { useHistory } from "react-router-dom";
import { Form, Card, Button, Nav, Tab, Col} from 'react-bootstrap'
import axios from 'axios'

const Login = () => {
    let history = useHistory();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [usernameLogin, setUsernameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")

    const userRegistration = () => {
    
        axios.post('http://localhost:3001/register', {
            username: username,
            email: email, 
            pwd: password

        }).then(() => {
            console.log("successfully send")
        })
    }

    const userLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/login', {
            username: usernameLogin, 
            pwd: passwordLogin

        }).then((res)=>{
            history.push({
                pathname: "/dashboard",
                state: { user: res.data[0] }
              });
            localStorage.setItem('user', JSON.stringify(res.data[0]))
        })
    }
    
    return(
        <div className="container p-5">
            <Col md={{  span: 9, offset: 2 }}>
            <Card>
                <Card.Body>
                <Tab.Container id="left-tabs-example" defaultActiveKey="#log">
                <Nav fill variant="pills" defaultActiveKey="#log">
                <Nav.Item>
                    <Nav.Link eventKey="#log">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="#register">Register</Nav.Link>
                </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="#log">
                        <div className="mt-4">
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" 
                            onChange={(e) => {setUsernameLogin(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                            onChange={(e) => {setPasswordLogin(e.target.value)}}/>
                        </Form.Group>

                        <Button variant="success" type="submit" onClick ={userLogin}>
                            Login
                        </Button>
                        </Form>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#register">
                    <div className="mt-4">
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" 
                            onChange={(e) => {setUsername(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" 
                            onChange={(e) => {setEmail(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                            onChange={(e) => {setPassword(e.target.value)}}/>
                        </Form.Group>

                        <Button variant="success" type="submit" onClick= {userRegistration}>
                            Register
                        </Button>
                        </Form>
                    </div>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Card.Body>
            </Card>
            </Col>
        </div>
    )
}

export default Login;