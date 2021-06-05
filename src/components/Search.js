import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import {Card, Row, Col, Accordion, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import RecipeCard from './RecipeCard';

const Search = props => {
    const location = useLocation();
    const [results, setResults] = useState([])
    const [recipeTypeFilter, setRecipeTypeFilter] = useState(null)
    const [dietFilter, setDietFilter] = useState(null)

    useEffect(() => {

        if(!applyFilters()) {
            var params = {
                query: location.search.substring(7),
                apiKey: '7f611fc7f9e34b598ca07d543eab276e'
            }

            axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
                setResults(res.data.results)  
            })
        }

    }, [location, results, applyFilters]);

    function imageSrc (id) {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }

    function onChangeRecipe(event) {
        setRecipeTypeFilter(event.target.value)
    }

    function onChangeDiet(event) {
        setDietFilter(event.target.value)
    }

    function applyFilters() {
        var isComplexSearch = recipeTypeFilter !== 'blankChoice' || dietFilter !== 'blankChoice'

        if (isComplexSearch) {
            var params = {
                query: location.search.substring(7),
                apiKey: '7f611fc7f9e34b598ca07d543eab276e',
                type: recipeTypeFilter,
                diet: dietFilter
            }

            axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
                setResults(res.data.results)
            })

            return true
        }

        return false
    }

    function resetFilters() {
        setRecipeTypeFilter('blankChoice')
        setDietFilter('blankChoice')
    }

    return (
        <div className="container">
            <Row style={{paddingTop: '10px'}}>
                <Col sm={{span:6, offset:3}}>
                    <Accordion  className="filters-card">
                        <a style={{ cursor: 'pointer' }}>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <i className="mr-1 fas fa-filter"></i>Filters
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Form.Group>
                                <Form.Control as="select" custom className="mb-3" value={recipeTypeFilter} onChange={onChangeRecipe.bind(this)}>
                                    <option key='blankChoice' hidden value>Type of recipe</option>
                                    <option value="appetizer">Appetizer</option>
                                    <option value="main course">Main Course</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="salad">Salad</option>
                                </Form.Control>
                                <Form.Control as="select" custom value={dietFilter} onChange={onChangeDiet.bind(this)}>
                                    <option key='blankChoice' hidden value>Diet</option>
                                    <option value="vegetarian">Vegetarian</option>
                                    <option value="vegan">Vegan</option>
                                    <option value="gluten free">Gluten free</option>
                                </Form.Control>
                            </Form.Group>
                            {(recipeTypeFilter !== 'blankChoice' || dietFilter !== 'blankChoice') && <Button onClick={resetFilters}>
                                Reset Filters
                            </Button>
                            }
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </a>
                    </Accordion>
                </Col>
            </Row>
            <Row>
                <Col sm={{span:6, offset:3}}>
                {
                    results?.map((result) =>
                        <RecipeCard title={result.title} src={imageSrc(result.id)} url={`/recipe/${result.id}`} />
                    )
                }
                </Col>
            </Row>
        </div>
    )

};

export default Search;