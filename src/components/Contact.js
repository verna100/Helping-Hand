import React, { Component } from 'react';
import { Form, Container, Button} from 'react-bootstrap';


class Contact extends Component {
    state = {  }
    render() { 
        return (  
        <div>
          <Container style={styles.containerStyle}>
          <Form>
              <Form.Group controlId="fullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="name" placeholder="Enter full name" />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Comments/ Suggestions</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
              <Button variant="primary" type="submit">
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

const styles ={
  containerStyle: {
    background: '#C7DDE5',
    width:1111,
    height:500,
    paddingLeft:30,
    paddingRight:30,
    paddingTop: 30,
    fontSize: 30,
    marginTop:60,
    // boxShadow: 20, 20
    boxShadow: `10px 3px 10px ${GREY}`,
    fontFamily: 'Source Code Pro'
      }
    
}