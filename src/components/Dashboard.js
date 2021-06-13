import React, {useEffect, useState} from 'react'
import '../css/styles.css'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

const Dashboard = (props) => {

    const [user, setUser] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            if(user == null)
                setUser(JSON.parse(localStorage.getItem('user')))
        }
        else {
            setUser(null)
        }
    }, [user])
    
    return(
        <>
            <h4>Dashboard page</h4>
            <p>{user && user.username}</p>
        </>
    )
}

export default Dashboard;