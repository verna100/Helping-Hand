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
          <h1 style={styles.headingStyle}>HTML</h1>
        {this.state.htmls.map(html => (
        <Context 
            key={html.id}
            id={html.id}
            heading={html.heading}
            title={html.title}
            text={html.text}
            tag={html.tag}
            image={html.image}
            />         
    ))}
       </div>
    
        )}
}

export default HTML;

const styles={
  headingStyle:{
    fontSize: 90,
    marginTop:20,
    textAlign:'center',
    fontFamily: 'Baloo Bhai'

  }
}