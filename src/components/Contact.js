import React, { Component } from "react";
import { Form, Container, Button } from "react-bootstrap";

class Contact extends Component {
  state = {
    fullName: "",
    email: "",
    comments: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    // console.log(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.fullName || !this.state.email) {
      alert(`Hello ${this.state.fullName}, did you forget an input?`);

      }else{

    alert(`Hello ${this.state.fullName} thanks for visiting!`);
      }

    this.setState({
      fullName: "",
      email: "",
      comments: ""
    });
  };

  render() {
    return (
      <div>
        <Container style={styles.containerStyle}>
          <Form>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter full name"
                name="fullName"
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comments/Suggestions</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button
              variant="danger"
              type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Contact;

const GREY = "#9E9E9E";

const styles = {
  containerStyle: {
    background: "#C7DDE5",
    width: 1111,
    height: 500,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    fontSize: 30,
    marginTop: 60,
    // boxShadow: 20, 20
    boxShadow: `10px 3px 10px ${GREY}`,
    fontFamily: "Source Code Pro"
  }
};
