import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Navbar';


class App extends Component {
  render() {
    return (
      <div className="container" style={styles.containerStyles}>
      <Router>
          <Header />
          <Nav />
      </Router>

      </div>
    );
  }
}

export default App;

const styles={
  containerStyles:{
    backgroundColor: '#pink'

  }
}