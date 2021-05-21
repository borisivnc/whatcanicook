import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import {Card} from 'react-bootstrap'
import axios from 'axios'

const Recipe = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('')

    useEffect(() => {
        var params = {
        apiKey: 'a580fafc28554f4a9ac047dcd8325266'
        }
        axios.get('https://api.spoonacular.com/recipes/' + id + '/information/', { params }).then(res => {
            setTitle(res.data.title)
        })
    }, [])

    return (
        <>
        <Card className="justify-center title white--text">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )
}

export default Recipe;