import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
// import javascripts from './src/javascripts';

function Context(props){ 
  // console.log(props);
  return ( 
    <div>
      <Container >
        <Row>
          <Col style={styles.cardStyle}>
            <Card bg="primary" text="white" >
                <Card.Header style={styles.cardHeader}>Language: {props.heading}</Card.Header>
                <Card.Body>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" /> 
                <Card.Title>Subject: {props.title}
                </Card.Title>
                <Card.Text >
                  Summary: {props.text}
                </Card.Text>
                <Card.Link href={props.tag} target="_blank">See More</Card.Link>
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
    width: '5rem', 
    height:'20rem', 
    fontSize: 20, 
    // overflowY:"scroll",
    overflow:"auto",
    flexDirection: "column"
  },
  cardHeader: {
    // position: "fixed",
    // width: 200,
    // background: "#bbb",
    // height: 20
  }
}