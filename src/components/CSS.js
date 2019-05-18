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
          <h1 style={styles.headingStyle}>css</h1>
        {this.state.css.map(css => (
        <Context 
            key={css.id}
            id={css.id}
            heading={css.heading}
            title={css.title}
            text={css.text}
            tag={css.tag}
            image={css.image}
            />         
    ))}
       </div>
    
        )}
}

export default CSS;

const styles={
  headingStyle:{
    fontSize: 90,
    marginTop:20,
    textAlign:'center',
    fontFamily: 'Baloo Bhai'

  }
}