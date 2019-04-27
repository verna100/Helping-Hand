import React, { Component, Navbar } from 'react';

class Nav extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar bg="light">
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Navbar>
            </div>
         );
    }
}
 
export default Nav;