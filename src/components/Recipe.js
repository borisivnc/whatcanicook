import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import {Card, Row, Col, Image} from 'react-bootstrap'
import axios from 'axios'

const Recipe = () => {
    const { id } = useParams();
    const [state, setState] = useState({
        title: '',
        summary: '',
        sourceName: '',
        servings: 0,
        readyInMinutes: 0,
        vegan: false,
        glutenFree: false
    })
    const blackBg = {background: 'black'}

    useEffect(() => {
        var params = {
        apiKey: 'a580fafc28554f4a9ac047dcd8325266'
        }
        axios.get('https://api.spoonacular.com/recipes/' + id + '/information/', { params }).then(res => {
            
            setState({
                title: res.data.title,
                summary: res.data.summary,
                sourceName: res.data.sourceName,
                servings: res.data.servings,
                readyInMinutes: res.data.readyInMinutes,
                vegan: res.data.vegan,
                glutenFree: res.data.glutenFree,
                extendedIngredients: res.data.extendedIngredients,
                instructions: res.data.instructions
            })
        })
    }, [id])

    function imageSrc (id) {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }

    function imageIngredient (image) {
        return ' https://spoonacular.com/cdn/ingredients_100x100/' + image
    }

    return (
        <div className="container">
        <Card style={blackBg} text='white' className="justify-center">
            <Card.Body>
                <Card.Title>{state.title}</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Row>
                    <Col><Card.Img src={imageSrc(id)}></Card.Img></Col>
                    <Col>
                        <h4>Realized by {state.sourceName}</h4>
                        <div className="content" dangerouslySetInnerHTML={{__html: state.summary}}></div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        <Card style={blackBg} text='white'>
            <Card.Body>
                <Row>
                    <span>
                    <span>
                        <i className='mr-2 fas fa-user'></i>
                        {state.servings} people
                    </span>
                    <span>
                        <i className='ml-3 mr-1 far fa-clock'></i>
                        {state.readyInMinutes} minutes
                    </span>
                    {state.vegan && <span>
                        <i className='ml-3 mr-1 fas fa-seedling'></i>
                        vegan
                    </span>
                    }
                    {state.glutenFree && <span>
                        <i className='ml-3 mr-1 fas fa-bread-slice'></i>
                        gluten free
                    </span>
                    }
                    </span>
                </Row>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Text>
                    <h3>Ingredients :</h3>
                    {
                        state.extendedIngredients?.map((ingr) =>
                            <>
                                <Row>
                                    <Col sm={3}>
                                    </Col>
                                    <Col sm={1}>
                                        <Image src={imageIngredient(ingr.image)}/>
                                    </Col>
                                    <Col sm={4}>
                                        <p style={{marginTop: '30px'}}>{ingr.originalString}</p>
                                    </Col>
                                </Row>
                                <div style={{height: '30px'}}></div>
                            </>
                        )
                    }
                    <h3>Directions:</h3>
                    <p>{state.instructions}</p>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    )
}

export default Recipe;