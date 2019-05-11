import React, { Component } from 'react';
import Context from './Context';
import javascripts from "../javascripts.json";
// import Header from "./Header";


class JavaScript extends Component {
    state = {
      javascripts
    };
    render(){
        return ( 
        <div>
        {this.state.javascripts.map(javascript => (
        <Context 
            key={javascript.id}
            id={javascript.id}
            heading={javascript.heading}
            title={javascript.title}
            text={javascript.text}
            />         
    ))}
       </div>
    
        )}
}
 
export default JavaScript;



