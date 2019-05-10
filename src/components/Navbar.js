import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import HTML from './HTML';
import JavaScript from './JavaScript'
import CSS from './CSS';



class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
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
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='/about' component={About} />
              <Route path='/html' component={HTML} />
              <Route path='/css' component={CSS} />
              <Route path='/javascript' component={JavaScript} />
          </Switch>
        </div>
         );
    }
}
 
export default Nav;