import React from 'react'
import '../css/styles.css'
import {Card, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router'

const RecipeCard = (props) => {

    const history = useHistory()

    function goToURL() {
        history.push(props.url)
    }

    return (
        <Card className="recipe-card" onClick={goToURL} style={{cursor: 'pointer'}}>
            <Row>
                <Col sm={5}>
                    <Card.Img variant="top" src={props.src} />
                </Col>
                <Col sm={7}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default RecipeCard;