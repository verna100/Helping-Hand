import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import HTML from './components/HTML';
import CSS from './components/CSS';
// import Context from './components/Context';
// import Wrapper from './components/Wrapper';
import JavaScript from './components/JavaScript';
// import javascripts from "./javascripts.json";

// import Cards from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="container" style={styles.containerStyles}>
      <Router>
          <Header />
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            <li><Link to={'/html'} className="nav-link">HTML</Link></li>
            <li><Link to={'/css'} className="nav-link">CSS</Link></li>
            <li><Link to={'/javascript'} className="nav-link">JavaScript</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/html' component={HTML} />
              <Route path='/css' component={CSS} />
              <Route path='/javascript' component={JavaScript} />
            
          </Switch>
        
            <br />
          
      </Router>
      {/* <JavaScript /> */}
      </div>
    );
  }
}

export default App;

const styles={
  containerStyles:{
    backgroundColor: '#pink'

  }
}