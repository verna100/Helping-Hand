import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
// import javascripts from './src/javascripts';

function Context(props){ 
  // console.log(props);
  return ( 
    <div>
      <Container>
        <Row>
          <Col>
            <Card bg="danger" text="white" style={styles.cardStyle}>
                <Card.Header>Language: {props.heading}</Card.Header>
                <Card.Body>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" /> 
                <Card.Title>Subject: {props.title}
                </Card.Title>
                <Card.Text >
                  Summary: {props.text}
                </Card.Text>
                </Card.Body>
                </Card>
                <br />
          </Col>
        </Row>
      </Container>
    </div>
         );
    }
 
export default Context;

const styles= {
  cardStyle: {
    width: '20rem', 
    height:'20rem', 
    fontSize: 20, 
    overflowY:"scroll",
    

  }
};