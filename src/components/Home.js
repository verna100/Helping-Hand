import React, { Component } from 'react';

// const API_KEY = process.env.REACT_APP_GITHUB_API_KEY;
// console.log(process.env.REACT_APP_GITHUB_API_KEY)

const API_KEY= `${process.env.REACT_APP_GITHUB_API_KEY}`

class Home extends Component {
  // Downloads oauth.js from CDN, pretty much like adding external scripts
  componentDidMount () {
    const oauthScript = document.createElement("script");
    oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  handleClick(e) {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize(API_KEY);

    // Popup Github and ask for authorization
    window.OAuth.popup('github').then((provider) => {

      // Prompts 'welcome' message with User's name on successful login
      // Check console logs for additional User info
      provider.me().then((data) => {
        console.log("data: ", data);
        alert("Welcome " + data.name + "!");
      });

    });
  }
    render() { 
        return ( 
          <div>
            {/* // <div style={styles.textStyle}> */}

              <button onClick={this.handleClick.bind(this)} className="btn btn-social btn-github" style={styles.buttonStyle}>
                    <span className="fa fa-github"></span> Sign in with Github
              </button>
            {/* <h1>Helping Hand Welcomes You</h1>
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
           </p> */}

           
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
   },
   buttonStyle:{
     fontSize: 30,
     color: '#fff',
     align:'center'

   }
 }
    
    
 
