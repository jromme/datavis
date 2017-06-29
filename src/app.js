import React, { Component } from 'react'
import axios from 'axios'
import Content from './Components/Content'
import Filter1 from './Components/Filter1'
import Filter2 from './Components/Filter2'
import Geomap from './Components/Geomap'
import Mainnav from './Components/Mainnav'
import Timeline from './Components/Timeline'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navitem: 'nav-druguse',
      year: 2004,
      data: []
    }
  }

  componentDidMount() {
    this.navHandler('nav-druguse')
  }

  timelineHandler(e) {
    const year = e.target.value
    this.setState({ year })
  }

  navHandler(item) {
    const navitem = item
    const dataitem = navitem.replace('nav-', 'content_')
    axios.get(`./data/${dataitem}.json`).then(x => {
      this.setState({
        data: x.data,
        navitem
      })
    })
  }

  render() {
    return (
      <div>
        <Filter1 />
        <div className="center">
          <Mainnav handler={(item) => this.navHandler(item)} navitem={this.state.navitem} />
          <Geomap data={this.state.data} navitem={this.state.navitem} year={this.state.year} />
        </div>
        <Filter2 />
        {(this.state.navitem === 'nav-overdose-deaths' || this.state.navitem === 'nav-price' || this.state.navitem === 'nav-law-offences') && <Timeline handler={(e) => this.timelineHandler(e)} value={this.state.year} />}
        <Content data={this.state.data} navitem={this.state.navitem} year={this.state.year} />
      </div>
    )
  }
}