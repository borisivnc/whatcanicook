import React from 'react'
import '../css/styles.css'
import {Card, Row, Col} from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useState, useEffect } from 'react'

const RecipeCard = (props) => {

    const history = useHistory()
    const [shortSummary, setShortSummary] = useState('')

    function goToURL() {
        history.push(props.url)
    }

    useEffect(() => {
        if(props.summary) {
            let ss = props.summary.substring(0, Math.min(props.summary.length, 150)) + '...'
            setShortSummary(ss)
        }
    }, [props])

    return (
        <Card className="recipe-card" onClick={goToURL} style={{cursor: 'pointer'}}>
            <Row>
                <Col sm={5}>
                    <Card.Img variant="top" src={props.src} />
                </Col>
                <Col sm={7}>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text><div dangerouslySetInnerHTML={{__html: shortSummary}}></div></Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default RecipeCard;