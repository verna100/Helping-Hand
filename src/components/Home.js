import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={styles.textStyle}>
            <h1>Helping Hand Welcomes You</h1>
            <hr />
            <br />
           <p>Hi, 
               <br />
             I created this app as a project to submit on my GitHub, but when thinking of a project I wanted to make something useful.
             <br />
             <br />
             A bit about me: 
             <br />
             I'm a recent FullStack Web Development bootcamp graduate and I often felt like I had no idea 
             what was going on. A lot of that had to do with the terminology that was being used. As someone who did not come from a technical
             background, I often found myself saying WHAT ARE THEY EVEN TALKING ABOUT?? in my mind. Simple explanations when explained by someone who has worked in technology
             can still be a bunch of terms that you've never heard before. I wanted to create this app based on simplification. I hope to be able to 
             explain common phrases/ technologies, etc... in layman's terms without losing the context. 
             <br />
             Hope this helps on your journey!
           </p>
         </div>
          );
     }
 }
  
 export default Home;
 
 const GREY = "#9E9E9E";
 
 const styles ={
   textStyle: {
     background: '#aabfdd',
    //  width:680,
     paddingLeft:30,
     paddingRight:30,
     paddingBottom:30,
     paddingTop:30,
     fontSize: 30,
     marginTop:60,
     // boxShadow: 20, 20
     boxShadow: `10px 3px 10px ${GREY}`,
     fontFamily: 'Source Code Pro'
   }
 }
    
    
 
