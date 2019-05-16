import React from 'react';
import { Card, Container, Row, Col} from 'react-bootstrap';
// import javascripts from './src/javascripts';
// import Animals from './onClick'

function Context(props){ 
  // console.log(props);
  return ( 
    <div >
      <Container>
        <Row>
          <Col >
            <Card className= "card text-black bg- mb-3" text="black">
                <Card.Header style={styles.cardHeader}>{props.title}
                <input type="checkbox" className="form-check-input" id="exampleCheck1" 
                style={{boxSizing: "border-box", padding: 0, width: 100, height: 18}}/>
                </Card.Header>
                <Card.Body className="rounded" style={styles.cardStyle}>
                <Card.Title>
                </Card.Title>
                <Card.Text > {props.text}</Card.Text>
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
    marginBottom:30,
    color:'#2e4568'

  },
  cardStyle: {
  //   // width: 350, 
  //   height:300, 
    fontSize: 20, 
    overflow:"auto",
    flexDirection: "row",
    // marginTop:20,
    background:"#eff0f2",
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Open Sans, sans-serif", 
    
    // color:'#2e4568'
  },
  cardHeader: {
    height: 80,
    background:'#2e4568',
    color:'white',
    fontSize: 20,
    fontFamily:"Noto Sans, sans-serif"
    
  },
  cardLink:{
    color:'blue'
  }
}

