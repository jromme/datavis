import React, { Component } from 'react'

export default class Footer extends Component {
  render(){
    return(
      <div id="footer">
        <div className="footerText">
          <p>This was made with &#10084; by Jerome Braeken</p>
          <p>Made with ReactJS</p>
          <p>Data source: <a href="http://www.emcdda.europa.eu/data/stats2016" target="_blank">European Monitoring Center for Drugs and Drug Addiction (data: 2016)</a></p>
        </div> 
      </div>
    )
  }
}