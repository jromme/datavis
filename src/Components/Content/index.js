import React, { Component } from 'react'
import InfoGrid from '../InfoGrid'

export default class Content extends Component {
    render(){
        const { data, navitem } = this.props
        return (
            <div id="content">
              {navitem === 'nav-happiness' && <InfoGrid data={data} />}
            </div>
        )
    }
}