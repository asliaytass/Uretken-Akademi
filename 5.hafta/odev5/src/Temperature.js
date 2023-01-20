import React, { Component } from 'react'
import {  Row, Col } from 'reactstrap'
import Celcius from './Celcius'
import Fahrenheit from './Fahrenheit'
import Kelvin from './Kelvin'



export default class Temperature extends Component {
  render() {
    return (
      <div>
      
            <Row className='mt-4'>
            <h6>3 birimde sıcaklık ölçümü</h6>
          
            </Row>

            <Row className='mt-3'>
                <Col><Celcius sicaklik={this.props.sicaklik}/></Col>
                <Col><Fahrenheit  sicaklik={this.props.sicaklik}/></Col>
                <Col><Kelvin  sicaklik={this.props.sicaklik}/></Col>
            </Row>
       
      </div>
    )
  }
}
