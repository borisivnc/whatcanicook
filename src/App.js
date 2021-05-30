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


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <MainNavbar/>
          <SecondNavbar/>
          <Switch>
            <Route path="/recipe/:id">
              <Recipe/>
            </Route>
            <Route path="/search">
              <Search/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

