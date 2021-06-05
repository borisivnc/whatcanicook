import React from 'react'
import '../css/login.css'
import { Form, Card, Button, Nav, Tab, Col} from 'react-bootstrap'

const Login = () => {

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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Login
                        </Button>
                        </Form>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#register">
                    <div className="mt-4">
                        <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="success" type="submit">
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