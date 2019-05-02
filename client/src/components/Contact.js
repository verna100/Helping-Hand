import React, { Component } from 'react';

class Contact extends Component {
    state = { 
      fullname: "",
      email: ""
     };

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the fullname and email
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Thank you: ${this.state.fullname} your info has been added to our directory`);
    // alert(`fullname: ${this.state.fullname}\nemail: ${this.state.email}`);
    this.setState({ fullname: "", email: "" });
  };

  render() {
    return (
      <form>
        <p>Fullname: {this.state.fullname}</p>
        <input
          type="text"
          placeholder="fullname"
          name="fullname"
          value={this.state.fullname}
          onChange={this.handleInputChange}
        />
        <p>Email: {this.state.email}</p>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}



 
export default Contact;