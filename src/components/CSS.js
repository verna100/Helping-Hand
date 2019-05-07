import React, { Component } from 'react';
import Context from './Context';
import css from "../css.json";

class CSS extends Component {
    state = {
      css
    };
    render(){
        return ( 
        <div>
        {this.state.css.map(css => (
        <Context 
            key={css.id}
            id={css.id}
            heading={css.heading}
            title={css.title}
            text={css.text}
            />         
    ))}
       </div>
    
        )}
}

export default CSS;