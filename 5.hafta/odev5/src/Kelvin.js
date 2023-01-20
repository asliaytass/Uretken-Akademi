import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <div>Kelvin: {(this.props.sicaklik +273.15)}</div>
    )
  }
}
