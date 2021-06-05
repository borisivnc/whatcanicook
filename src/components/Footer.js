import React from 'react'
import '../css/styles.css'
import { Col, Navbar, Button} from 'react-bootstrap'

const Footer = () => {

    return(
        <div>
        <Navbar style={{height:'120px',width:'100%', position: 'relative', bottom: 0, textAlign: 'center'}}>
            <Col>
                    <Button variant="link" style={{color:'black'}}><i className="fab fa-facebook fa-lg"></i></Button>
                    <Button variant="link" style={{color:'black'}} ><i className="fab fa-instagram fa-lg"></i></Button>
                
                <hr/>
                <div className="footerButton mt-4 mb-1"> 
                    {new Date().getFullYear() } — <strong>What can I cook</strong>
                </div>
            </Col>
            
        </Navbar>

        </div>
    )
}

export default Footer;