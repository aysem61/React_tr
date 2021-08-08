import React from "react";
import { Card, Button ,Container,Row,Col} from "react-bootstrap";
import data from "./data";

function Kart(props) {
    console.log(props);
    const{text,name,img}=data[props.isim];
    
    // console.log(text);
    // console.log(name);
    // console.log(img);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {text}</Card.Text>
          <Button variant="danger">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Main() {
  return (
    <div>
    <Container className="text-center border mt-4">
        <Row className="d-flex justify-content-center">
            <Col className= "mb-3 d-flex justify-content-center "
             xs={12} 
             md={6} 
             lg={4}
             >
            <Kart isim="0"/>
            </Col>
            <Col className="mb-3 d-flex justify-content-center"
             xs={12} 
             md={6} 
             lg={4}
             >
            <Kart isim="1"/> 
            </Col>
            <Col className="mb-3 d-flex justify-content-center"
             xs={12} 
             md={6} 
             lg={4}
             >
            <Kart isim="2"/>
            </Col>
        </Row>
    </Container>
      
    </div>
  );
}

export default Main;
