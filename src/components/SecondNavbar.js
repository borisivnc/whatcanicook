import React from 'react'
import '../css/styles.css'
import {Navbar, NavDropdown} from 'react-bootstrap'

const SecondNavbar = () => {

    return(
        <>
            <Navbar className="second-navbar justify-content-center">
                    
                        <NavDropdown title="HEALTHY RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="#action/3.1">Appetizer</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Breakfast</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Main Course</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="HEALTHY RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="#action/3.1">Salad</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Soup</NavDropdown.Item>
                        </NavDropdown>
                   
                        <NavDropdown title="DIET" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="#action/3.1">Vegetarian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Vegan</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gluten-free</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Ketogenic</NavDropdown.Item>
                        </NavDropdown>
                    
                        <NavDropdown title="BY CONTINENT" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="#action/3.1">American</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Latin American</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Italian</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Chinese</NavDropdown.Item>
                        </NavDropdown>
                    
                        <NavDropdown title="QUICK RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="#action/3.1">Snack</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fingerfood</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Marinade</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Beverage</NavDropdown.Item>
                        </NavDropdown>
                    
            </Navbar>
            
        </>
    )
}

export default SecondNavbar;