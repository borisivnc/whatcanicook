import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import { Col, Row, Navbar,Container, Button} from 'react-bootstrap'
import axios from 'axios'
import RecipeCard from './RecipeCard';

const Category = () => {

    const {type, name} = useParams();
    const [results, setResults] = useState([])

    const imageSrc = (id) => {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }
    
    const loadRecipes = () => {
        var params = {
          apiKey: 'a580fafc28554f4a9ac047dcd8325266',
          number: 50
        }
        if (type === 'diet') {
          params.diet = name
        } else if (type === 'type') {
          params.type = name
        } else if (type === 'cuisine') {
          params.cuisine = name
        }
  
        axios.get('https://api.spoonacular.com/recipes/search', { params }).then(res => {
            setResults(res.data.results)
        })
    }

    useEffect(() => {
        loadRecipes()
    }, [])

    return(
        <div className="container">
            <Row>
                <Col sm={{span:6, offset:3}}>
                <h2 className="mt-4 text-uppercase">{name}</h2>
                {
                    results.map((result) =>
                        <RecipeCard title={result.title} src={imageSrc(result.id)} url={`/recipe/${result.id}`} />
                    )
                }
                </Col>
            </Row>

        </div>
    )
}

export default Category;