import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import Temperature from './Temperature'


var sicaklik=0;
export default class App extends Component {

    sicaklikArttir = () => {
    sicaklik=sicaklik+1;
    this.setState({sicaklik});
    // console.log(this.setState.sicaklik);
  }
  sicaklikAzalt = () => {
    sicaklik=sicaklik-1;
    this.setState({sicaklik});
    
  }
  render() {
    return (
      <div >
       <Container className="mt-5">
        <h3>Hava Nasıl</h3>
        <h6>Şuan Sıcaklık: {sicaklik} derece</h6>
        <Row>
          <Col xs="2">
          <Button  onClick={()=>this.sicaklikArttir()} className="mt-3" color="warning" outline>Sıcaklık Arttır</Button>
          </Col>
          <Col  xs="2">
          <Button  onClick={()=>this.sicaklikAzalt()} className="mt-3" color="warning" outline>Sıcaklık Azalt</Button>
          </Col>
        </Row>
      
      <Temperature sicaklik={sicaklik} />    
      </Container>
      </div>
    )
  }
}




