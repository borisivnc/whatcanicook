import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import {Card, Row, Col, Image, Accordion, Button} from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from "react-router-dom";
import RecipeCard from './RecipeCard';

const Search = props => {
    const location = useLocation();
    const [results, setResults] = useState([])

    useEffect(() => {
       // console.log(location.pathname); // result: '/secondpage'
       // console.log(location.search); // result: '?query=abc'
       console.log(location.search.substring(7));

       var params = {
        query: location.search.substring(7),
        apiKey: '7f611fc7f9e34b598ca07d543eab276e'
      }

      axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
        setResults(res.data.results)  
        console.log(res.data.results)
      })

    }, [location]);

    function imageSrc (id) {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }

    return (
        <div className="container">
            <Row style={{paddingTop: '10px'}}>
                <Col sm={{span:6, offset:3}}>
                    <Accordion defaultActiveKey="0"  className="filters-card">
                        <a style={{ cursor: 'pointer' }}>
                            <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                <i className="mr-1 fas fa-filter"></i>Filters
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
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