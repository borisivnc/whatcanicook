import React from 'react'
import '../css/styles.css'
import {Button, Card, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router'

const RecipeCard = (props) => {

    const history = useHistory()

    function goToURL(url) {
        console.log(url)
        history.push(url)
    }

    return (
        <a style={{ cursor: 'pointer' }} onClick={() => goToURL(props.url)}>
            <Card className="recipe-card">
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
        </a>
    )
}

export default RecipeCard;