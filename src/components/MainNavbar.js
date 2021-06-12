import React from 'react'
import logo from '../assets/logo.png'
import '../css/styles.css'
import {Navbar, Form, Button, FormControl, Col} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const MainNavbar = () => {

    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('')

    function handleSearch() {
        console.log(history)
        // history.push("/search?query=" + searchQuery);
        history.push({
            pathname: '/search',
            search: '?query=' + searchQuery
        })
    }

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
                    <FormControl
                    type="text"
                    placeholder="Ingredient, dish, keyword.."
                    className="sm-2"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    />
                    <Button onClick={handleSearch} variant="success">Search</Button>
                    </Form>
                </Col>
                <Button variant="link" href="/login" style={{color:'black'}}><i className="fas fa-user fa-lg"></i></Button>
            </Navbar>
            
        </>
    )
}

export default MainNavbar;