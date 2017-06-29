import React, { Component } from 'react'
import ReactBootstrapSlider from 'react-bootstrap-slider'

export default class Timeline extends Component {
    render() {  
      return (
        <div className="timeline">
          <div className="timelineTooltip">{this.props.value}</div>
          <input
              type="range"
              value={this.props.value}
              min={2004}
              max={2014}
              onChange={(e) => this.props.handler(e)}
              step={1} />
        </div>
      )
    }
} 

