import React, { Component } from 'react';
import '../index.css'

class About extends Component {
    state = {  }
    render() { 
        return ( 
        <div style={styles.textStyle}>
           <h1>Helping Hand Welcomes You</h1>
           <hr />
           <br />
          <p>Hi, I created this app as a project to submit on my Github but when thinking of a project I wanted something useful.
            A bit about the creator. I'm a recent full stack web development bootcamp graduate and I often felt like I had no idea 
            what was going on. A lot of that had to do with the terminology that was being used. As someone who did not come from a technical
            background, I often found myself asking WHAT ?? in my mind. Simple explanations when explained by someone who has worked in technology
            can still be full of terms that you've never heard before. I wanted to create this project based on the simplification. I hope to be able to 
            explain common phrases/ technologies, etc... in the most layman terms without losing the context. Hope this helps on your journey!
          </p>
        </div>
         );
    }
}
 
export default About;

const GREY = "#9E9E9E";

const styles ={
  textStyle: {
    background: '#F7E9F6',
    width:1111,
    paddingLeft:30,
    paddingRight:30,
    fontSize: 30,
    marginTop:60,
    // boxShadow: 20, 20
    boxShadow: `10px 3px 10px ${GREY}`,
    fontFamily: 'Source Code Pro'
  }
}