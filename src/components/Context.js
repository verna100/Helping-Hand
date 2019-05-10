import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
// import javascripts from './src/javascripts';

function Context(props){ 
  // console.log(props);
  return ( 
    <div>
      <Container style={styles.containerStyle}>
        <Row>
          <Col style={styles.cardStyle}>
            <Card className= "card text-white bg-info mb-3" text="white" >
                <Card.Header style={styles.cardHeader}>Language: {props.heading}</Card.Header>
                <Card.Body>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" /> 
                <Card.Title>Subject: {props.title}
                </Card.Title>
                <Card.Text >
                  Summary: {props.text}
                </Card.Text>
                <Card.Link href={props.tag} style={styles.cardLink} target="_blank">See More</Card.Link>
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
  containerStyle: {
    flexDirection:'column',
    marginBottom:30

  },
  cardStyle: {
    width: '5rem', 
    height:'20rem', 
    fontSize: 20, 
    overflowY:"scroll",
    // overflow:"auto",
    flexDirection: "row"
  },
  cardHeader: {
    // position: "fixed",
    // width: 200,
    // background: "#bbb",
    // height: 20
  },
  cardLink:{
    color:'black'
  }
}