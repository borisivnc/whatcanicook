import React from 'react'
import '../css/styles.css'
import {Navbar, NavDropdown} from 'react-bootstrap'

const SecondNavbar = () => {

    return(
        <>
            <Navbar className="second-navbar justify-content-center">
                    
                        <NavDropdown title="HEALTHY RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="/recipes/category/type/appetizer">Appetizer</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/breakfast">Breakfast</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/main%20course">Main Course</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/dessert">Dessert</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="HEALTHY RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="/recipes/category/type/salad">Salad</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/soup">Soup</NavDropdown.Item>
                        </NavDropdown>
                   
                        <NavDropdown title="DIET" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="/recipes/category/diet/vegetarian">Vegetarian</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/diet/vegan">Vegan</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/diet/gluten%20free">Gluten-free</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/diet/ketogenic">Ketogenic</NavDropdown.Item>
                        </NavDropdown>
                    
                        <NavDropdown title="BY CONTINENT" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="/recipes/category/cuisine/american">American</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/cuisine/latin%20american">Latin American</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/cuisine/italian">Italian</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/cuisine/chinese">Chinese</NavDropdown.Item>
                        </NavDropdown>
                    
                        <NavDropdown title="QUICK RECIPES" id="nav-dropdown" className="ml-5 mr-5">
                            <NavDropdown.Item href="/recipes/category/type/snack">Snack</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/fingerfood">Fingerfood</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/marinade">Marinade</NavDropdown.Item>
                            <NavDropdown.Item href="/recipes/category/type/beverage">Beverage</NavDropdown.Item>
                        </NavDropdown>
                    
            </Navbar>
            
        </>
    )
}

export default SecondNavbar;