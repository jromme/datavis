import React, { Component } from 'react'

export default class InfoGrid extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <div className="contentRechartsInfo">The average price of drugs in a country.</div>
        <div className="InfoGrid">
        {data.sort((a, b) => b.total - a.total).map((x, i) =>
          <dl key={i} className="gridItem">
            <dt className="gridItemGrade">{x.total}</dt>
            <dd className="gridItemCountry">{x.Country}</dd>
          </dl>
        )}
        </div>
      </div>
    )
  }
}