import React, { Component } from 'react';
import Context from './Context';
// import css from "../css.json";

class CSS extends Component {
    state = {
      css: [
        {
          // id: 1,
          title: "What is it?",
          text: "CSS stands for Cascading Style Sheets. It adds styles and animations to your webpage.",
          tag: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
         
        },
        {
          // id: 2,
          title: "How do I start?",
          text: "You can add CSS directly to your HTML by adding <style> tags. In between the style tags you add the styles you'd like to change: font-size, background-color, line-spacing, etc... As you progress further it's easier to keep styles in a css sheet and link it to your HTML. All you have to do is add the link to the head of the HTML page like this: <link rel='stylesheet' href=path/to/my/stylesheet-file.css'>",
          tag: "https://www.w3schools.com/css/css_howto.asp"
        },
        // {
        //   id: 3,
        //   title: "Let's break down the link",
        //   text: "<link rel='stylesheet' href=path/to/my/stylesheet-file.css'> rel specifies the relationship between the current document and the linked document. href points to the path where your stylesheet is located. Let's say you have index.html and your stylesheet is in a separate css file in a css folder. You can easily reference this sheet by: <link rel=stylesheet href= 'css/mystyles.css'> in the href portion css is the name of the folder and mystyles.css is the name of the stylesheet within that folder. There are other attributes you can use in the link like type='text/css' but rel and href are must haves!",
        //   tag: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics#So_what_is_CSS_really"
        // },
        // {

        //   id: 4,
        //   title: "Test",
        //   text: "testing",
        //   tag: "https://www.w3schools.com/css/css_howto.asp"
        // }
    ] 
    };

    onCSSClick = e => {
      const { css } = this.state; // current list
      const index = e.target.dataset.index; // the index of the clicked item
      const [clicked] = css.splice(index, 1); // extract the item and delete it from the array
  
      this.setState({
        css: [...css, clicked] // add the clicked item to the end
      });
    };
    render(){
      const { css } = this.state;

        return css.map((a, i) => ( 
        <div onClick={this.onCSSClick} data-index={i} >
        {a.css}
          
        {this.state.css.map(css => (
        <Context 
            key={css.id}
            // id={css.id}
            // heading={css.heading}
            title={css.title}
            text={css.text}
            tag={css.tag}
            />     
        ))   
    }
       </div>
    ));

    }
  }

export default CSS;

// const styles={
//   headingStyle:{
//     fontSize: 90,
//     marginTop:20,
//     textAlign:'center',
//     fontFamily: 'Baloo Bhai'

//   }
// }