import React, {useState} from 'react'
import logo from '../assets/logo.png'
import '../css/styles.css'
import {Navbar, Form, Button, FormControl} from 'react-bootstrap'

const MainNavbar = () => {

    return(
        <div>
            <Navbar className="navbar">
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src={logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                    />{' '}
                    <span className="title">What can I cook</span>
                </Navbar.Brand>
                <Form inline className="">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                
            </Navbar>
            
            
        </div>
    )
}

export default MainNavbar;