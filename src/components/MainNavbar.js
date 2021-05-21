import React from 'react'
import logo from '../assets/logo.png'
import '../css/styles.css'
import {Navbar, Form, Button, FormControl, Col} from 'react-bootstrap'

const MainNavbar = () => {

    return(
        <>
            <Navbar className="navbar justify-content-between">
                <Navbar.Brand href="/">
                <img
                    alt="logo"
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block"
                />{' '}
                <span className="title">WHAT CAN I COOK</span>
                </Navbar.Brand>
                <Col sm="5">
                    <Form className="search-bar">
                    <FormControl type="text" placeholder="Ingredient, dish, keyword.." className="sm-2" />
                    <Button variant="success">Search</Button>
                    </Form>
                </Col>
            </Navbar>
            
        </>
    )
}

export default MainNavbar;