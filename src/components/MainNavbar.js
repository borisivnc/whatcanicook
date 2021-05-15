import React, {useState} from 'react'
import logo from '../assets/logo.png'
import '../css/styles.css'
import {Navbar} from 'react-bootstrap'

const MainNavbar = () => {

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                What can I cook
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default MainNavbar;