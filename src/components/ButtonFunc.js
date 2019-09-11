import React, { Component }from 'react';
import useLocalStorage from 'react-use-localstorage';
// ----------------------------------------------------------------------------------------------------------


// switchoff: function(){
//   localStorage.setItem('state', 'off');
//   this.setState({lights: 'off'}); 
// },
class Read extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        useLocalStorage.setItem('state', 'off');
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
          
        }));
        
      }
    
      render() {
        return (
          <button style={styles.buttonStyle} onClick={this.handleClick}>
            {this.state.isToggleOn ? 'UNREAD' : 'READ'}
          </button>
        );
      }
    }
 
export default Read;

const styles={
    buttonStyle:{
      opacity: 0.5,
      // background: 'yellow',
      fontColor:'#red',
      float:'right'
  
    }
  }