import React, { Component } from 'react';
import Context from './Context';
import htmls from "../htmls.json";

class HTML extends Component {
    state = {
      htmls
    };
    render(){
        return ( 
        <div>
        {this.state.htmls.map(html => (
        <Context 
            key={html.id}
            id={html.id}
            heading={html.heading}
            title={html.title}
            text={html.text}
            tag={html.tag}
            />         
    ))}
       </div>
    
        )}
}

export default HTML;