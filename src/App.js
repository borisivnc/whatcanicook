import './App.css'
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainNavbar from './components/MainNavbar'
import SecondNavbar from './components/SecondNavbar'
import Recipe from './components/Recipe'
import Search from './components/Search'
import Home from './components/Home'
import Footer from './components/Footer'
import Category from './components/Category'
import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <div className="pageContainer">
        <Router>
          
            <MainNavbar/>
            <SecondNavbar/>
            <Switch>
              <Route path="/recipe/:id">
                <Recipe/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/recipes/category/:type/:name">
                <Category/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

