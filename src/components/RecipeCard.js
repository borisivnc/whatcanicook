import React from 'react'
import '../css/styles.css'
import {Button, Card} from 'react-bootstrap'

const RecipeCard = (props) => {

    function goToURL(url) {
        console.log(url)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => goToURL(props.to)}>Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default RecipeCard;