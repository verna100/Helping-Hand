import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <header 
                style={styles.headerStyle}>Helping Hand 
                 <i className= "fas fa-hands-helping"></i>
                </header>
            </div>
         );
    }
}
 
export default Header;

const styles ={
    headerStyle:{
        fontSize: 86,
        color: '#465d82',
        paddingLeft:0

    }
}