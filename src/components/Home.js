import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import '../css/styles.css'
import { Col, Row, Card,Container} from 'react-bootstrap'
import axios from 'axios'
import FoodCard from './FoodCard'

const Home = () => {

    let history = useHistory();

    const [headerImage, setHeaderImage] = useState('')
    const [randomImages, setRandomImages] = useState([])

    const imageSrc = (id) => {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }

    useEffect(() => {
        var params2 = {
            number: 1
        }

        var params = {
            apiKey: '7f611fc7f9e34b598ca07d543eab276e',
            number: 12
        }

        const fetchData = async () => {
          const result = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=7f611fc7f9e34b598ca07d543eab276e', { params2 });
     
          setHeaderImage(result.data.recipes["0"]);
        };

        const fetchData2 = async () => {
            const result = await axios.get('https://api.spoonacular.com/recipes/random',{ params });
       
            setRandomImages(result.data.recipes);
            //console.log(randomImages)
          };
     
        fetchData();
        fetchData2();
    }, []);

    const goToRecipe = () =>{
        history.push(`/recipe/${headerImage.id}`);
   }

    return(
        <div className="container mt-5">
            <Card border="secondary" onClick={goToRecipe} style={{cursor: 'pointer'}} >
                <Row>
                    <Col>
                        <br/><br/><br/><br/><br/>
                        <h2 className="text-center">Try this recipe !</h2>
                        <p className=" mt-4 headline text-center">
                        {headerImage.title}
                        </p>
                    </Col>
                    <Col>
                        <Card.Img className="rounded-image" src={imageSrc(headerImage.id)} />
                    </Col>
                </Row>
            </Card>

            <h2 className="mt-5">Lack of inspiration ?</h2>
            <Container>
                <Row>
                {
                    randomImages.map((index) => 
                    <Col sm={3} className="mb-5">
                    <FoodCard key={index.id} title={index.title} route={`/recipe/${index.id}`} img={imageSrc(index.id)}/>
                    </Col>
                    )
                }
                </Row>
            </Container>
        </div>
    )
}

export default Home;