import React, {useEffect, useState} from 'react'
import '../css/styles.css'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

const Dashboard = (props) => {

    const [user, setUser] = useState([])

    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        else {
            setUser([])
        }
    }, [user])
    
    return(
        <>
            <h4>Dashboard page</h4>
            <p>{user.username}</p>
        </>
    )
}

export default Dashboard;