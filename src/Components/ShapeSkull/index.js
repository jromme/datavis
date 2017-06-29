import React, { Component } from 'react'

export default class ShapeSkull extends Component {
  render() {
    const {cx, cy, stroke, payload, value} = this.props;

    return (
      <svg x={cx - 25} y={cy - 25} width={60} height={60}>
        <image href="./img/skull.png" height="50px" width="50px"/>
      </svg>
    )
  }
}