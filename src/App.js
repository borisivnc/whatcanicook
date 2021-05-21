import './App.css'
import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MainNavbar from './components/MainNavbar'
import Recipe from './components/Recipe'

function App() {
  return (
    <div className="App">
      <MainNavbar/>
      <Router>
        <div>
          <Switch>
            <Route path="/recipe/:id">
              <Recipe/>
            </Route>
            <Route exact path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
