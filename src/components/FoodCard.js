import React from 'react'
import { useHistory } from "react-router-dom";
import '../css/styles.css'
import {Card} from 'react-bootstrap'

const FoodCard = (props) => {
    let history = useHistory();

    const goToRecipe = () =>{
        history.push(props.route);
    }

    return(
        <>
        <Card className="text-white" onClick={goToRecipe} style={{cursor: 'pointer'}}>
            <Card.Img src={props.img}/>
                <Card.ImgOverlay style={{background: 'rgba(0,0,0,.3)'}}>
                    <Card.Title className="text-wrap font-weight-medium">{props.title}</Card.Title>
                </Card.ImgOverlay>
        </Card>
        </>
    )
}

export default FoodCard;