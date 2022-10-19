import './App.css';
import Home from "./Roots/home"
import About from "./Roots/about"
import Shop from "./Roots/shop"


function App() {
  return(
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>  
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        </Switch> 
      </Router>
  );
}

export default App; 
