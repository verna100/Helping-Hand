import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Home from './Home';
import Contact from './Contact';
// import About from './About';
import HTML from './HTML';
import JavaScript from './JavaScript'
import CSS from './CSS';



class Nav extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar-light" style={styles.navStyle}>
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>   
                </ul>
                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>View More Here</DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem><li><Link to={'/contact'} className="nav-link">Contact</Link></li></DropdownItem>
                        {/* <DropdownItem><li><Link to={'/about'} className="nav-link">About</Link></li></DropdownItem> */}
                        <DropdownItem><li><Link to={'/html'} className="nav-link">HTML</Link></li></DropdownItem>
                        <DropdownItem><li><Link to={'/css'} className="nav-link">CSS</Link></li></DropdownItem>
                        <DropdownItem><li><Link to={'/javascript'} className="nav-link">JavaScript</Link></li></DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                </nav>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                {/* <Route path='/about' component={About} /> */}
                <Route path='/html' component={HTML} />
                <Route path='/css' component={CSS} />
                <Route path='/javascript' component={JavaScript} />
            </Switch>
        </div>
         );
    }
}
 
export default Nav;

const styles ={
  navStyle:{
    backgroundColor:"#c7d0dd",
    fontSize:20
  }
}