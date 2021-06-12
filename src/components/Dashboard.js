import React, {useEffect, useState} from 'react'
import '../css/styles.css'
import {Card} from 'react-bootstrap'

const Dashboard = (props) => {
    const [user, setUser] = useState(props.location.state.user)
    
    console.log(user)
    useEffect(() => {
    
    }, [])

    
    return(
        <>
        <h4>Dashboard page</h4>
        <p>{user.username}</p>
        </>
    )
}

export default Dashboard;