import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import '../css/styles.css'
import {Card, Row, Col, Image} from 'react-bootstrap'
import axios from 'axios'
import { useLocation } from "react-router-dom";

const Search = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.search.substring(7));
    }, [location]);

    return (<div className="container"></div>)

};

export default Search;