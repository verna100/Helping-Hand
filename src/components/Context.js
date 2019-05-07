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
                <Card.Header>{props.heading}</Card.Header>
                <Card.Body>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" /> 
                <Card.Title>Title: {props.title}
                </Card.Title>
                <Card.Text >
                  Text: {props.text}
                </Card.Text>
                </Card.Body>
                </Card>
          </Col>
          <br />
          <br />
                        
                  {/* <Col> 
                  <Card bg="warning" text="white" style={styles.cardStyle}>
                          <Card.Header>JavaScript</Card.Header>
                          <Card.Body>
                            <Card.Title>How do you use it?</Card.Title>
                            <Card.Text>
                              Good question, simple answer. You can write JavaScript within the HTML page by using the script elements.
                              As you progress in coding you'll learn that for cleaner, more readable code you use a separate file saved as a js file (milkshake).
                              you take your current HTML which we will call iceCream.HTML and add a script tag referring to your Javascript file known as (milkshake.js).
                              That simple you now have the necessary tool to take your iceCream(HTML) and turn it into a milkShake (javascript).

                            </Card.Text>
                          </Card.Body>
                        </Card>
                        </Col> */}
                  {/* <Col> 
                  <Card bg="info" text="white" style={styles.cardStyle}>
                          <Card.Header>Javascript</Card.Header>
                          <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk
                              of the card's content.
                            </Card.Text>
                          </Card.Body>
                        </Card>
                        </Col> */}
                        <br />
                </Row>
              </Container>
            {/* <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
              </Card.Text>
            </Card.Body>
          </Card> */}
          </div>
         );
    }
 
export default Context;

const styles= {
  cardStyle: {
    width: '20rem', 
    height:'20rem', 
    fontSize: 20, 
    overflowY:"scroll"
    

  }
};