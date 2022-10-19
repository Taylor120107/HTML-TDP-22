import React from "react";
import {Switch,Route,BrowserRouter as Router,Link} from "react-router-dom"
import './App.css';
import Home from "./Roots 2/homepage"
import User from "./Roots 2/userspage"
import Contact from "./Roots 2/contactpage"
import NotFound from "./Roots 2/404 page"

function App () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/userspage">User</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/userspage/:id">
            <User/>
          </Route>
          <Route path="/userspage">
            <User/>
          </Route>
          <Route path="/contactpage">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App; 
