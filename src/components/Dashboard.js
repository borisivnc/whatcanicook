import React, {useEffect, useState} from 'react'
import '../css/styles.css'
import {Row, Col} from 'react-bootstrap'
import axios from 'axios'
import RecipeCard from './RecipeCard'

const Dashboard = (props) => {

    const [user, setUser] = useState(null)
    const [favorites, setFavorites] = useState([])
    var loaded = false

    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            let _user = JSON.parse(localStorage.getItem('user'));
            if(user == null)
                setUser(_user)
            /*axios.post('http://localhost:3001/getfavorites', {
                id_user: _user.iduser
            }).then((res) => {
                var params = {
                    apiKey: '7f611fc7f9e34b598ca07d543eab276e'
                }
                if(!loaded) {
                    console.log(res.data)
                    loaded = true
                    res.data.forEach(fav => {
                        axios.get('https://api.spoonacular.com/recipes/' + fav.id_recipe + '/information/', { params }).then(recipe => { 
                            setFavorites(favorites => [...favorites, {
                                id: fav.id_recipe,
                                title: recipe.title
                            }])
                        })
                    })
                }
                
            })*/
            
            
        }
        else {
            setUser(null)
        }
    }, [user])

    function loadFavorites() {
        if (localStorage.getItem('user') != null) {
            let _user = JSON.parse(localStorage.getItem('user'));
            axios.post('http://localhost:3001/getfavorites', {
                id_user: _user.iduser
            }).then((res) => {
                var params = {
                    apiKey: '7f611fc7f9e34b598ca07d543eab276e'
                }
                

                res.data.forEach(fav => {
                    axios.get('https://api.spoonacular.com/recipes/' + fav.id_recipe + '/information/', { params }).then(recipe => { 
                    setFavorites(favorites => [...favorites, {
                            id: fav.id_recipe,
                            title: recipe.data.title,
                            summary: recipe.data.summary
                        }])
                    })
                })
                
                
            })
        }
    }

    const useMountEffect = useEffect(loadFavorites, [])

    function imageSrc (id) {
        return 'https://spoonacular.com/recipeImages/' + id + '-240x150.jpg'
    }
    
    return(
        <>
        <br/>
        {user &&
            <div className="text-center">
                <h4><i className="fas fa-bookmark mr-3"></i>{user.username}'s favorite recipes !</h4>
                <Row>
                    <Col sm={{span:6, offset:3}}>
                    {
                        favorites.map((result) =>
                            <RecipeCard key={result.id} title={result.title} src={imageSrc(result.id)} url={`/recipe/${result.id}`} summary={result.summary} />
                        )
                    }
                    </Col>
                </Row>
            </div>
        }
        <br />
        </>
    )
}

export default Dashboard;