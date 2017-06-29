import React, { Component } from 'react'
import Recharts from 'recharts'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ScatterChart, Scatter } from 'recharts'
import ShapeSkull from '../ShapeSkull'

// const data = [
//       {name: 'Page A', pv: 2400, amt: 2400},
//       {name: 'Page B', pv: 1398, amt: 2210},
//       {name: 'Page C', pv: 9800, amt: 2290},
//       {name: 'Page D', pv: 3908, amt: 2000},
//       {name: 'Page E', pv: 4800, amt: 2181},
//       {name: 'Page F', pv: 3800, amt: 2500},
//       {name: 'Page G', pv: 4300, amt: 2100}
// ];

export default class ChartComponent extends Component {

  renderTooltip() {
    return (
     <div>Custom content</div>
    )
  }
  render() {
    const { data, type, year } = this.props
    // console.log(data.map(x => x.Country))
    return (
      <div>
        {type === 'druguse' && 
          <div>
            <div className="contentRechartsInfo">The amount of drug use per ten thousand inhabitants.</div>
            <div className="contentRecharts">
              <BarChart width={2500} height={600} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                 <XAxis dataKey="Country"/>
                 <CartesianGrid stroke='#3B3B3B' vertical={false}/>
                 <Tooltip cursor={false} animationDuration={100} animationEasing='ease-in-out' />
                 <Legend />
                 <Bar name='Total Drug Use per 10k Inhabitants' type="monotone" dataKey="Total_overall_per_10k" barSize={30} fill="#DEDEDE" />
              </BarChart>
            </div>
          </div>
        }
        {type === 'overdosedeaths' && 
          <div>  
            <div className="contentRechartsInfo">The amount of people killed by an overdose of drugs.</div>
            <div className="contentRecharts">
              <ScatterChart width={2500} height={600} margin={{top: 5, right: 30, bottom: 20, left: 5}}>
                <XAxis dataKey={'Country'}/>
                <YAxis hide={true} dataKey={year} />
                <CartesianGrid stroke='#3B3B3B' horizontal={false} />
                <Tooltip cursor={false} animationDuration={100} animationEasing='ease-in-out'/>
                <Legend iconType="star"/>
                <Scatter name='Amount of Overdose Deaths' data={data} fill='#DEDEDE' shape={<ShapeSkull />} />
              </ScatterChart>
            </div>
          </div>
        }
        {type === 'price' &&
          <div>
            <div className="contentRechartsInfo">The average price of drugs in a country.</div>
            <div className="contentRecharts">
              <ScatterChart width={2500} height={600} margin={{top: 5, right: 30, bottom: 20, left: 5}}>
                <XAxis dataKey={'Country'}/>
                <YAxis hide={true} dataKey={year} />
                <CartesianGrid stroke='#3B3B3B' horizontal={false} />
                <Tooltip cursor={false} animationDuration={100} animationEasing='ease-in-out'/>
                <Legend iconType="star"/>
                <Scatter name='Average Price of Drugs per Country' data={data} fill='#DEDEDE' shape="star"/>
              </ScatterChart>
            </div>
          </div>
        }
        {type === 'lawoffences' && 
          <div>
            <div className="contentRechartsInfo">The amount of drug-related law offences.</div>
            <div className="contentRecharts">
              <ScatterChart width={2500} height={600} margin={{top: 5, right: 30, bottom: 20, left: 5}}>
                <XAxis dataKey={'Country'}/>
                <YAxis hide={true} dataKey={year} />
                <CartesianGrid stroke='#3B3B3B' horizontal={false} />
                <Tooltip cursor={false} animationDuration={100} animationEasing='ease-in-out'/>
                <Legend iconType="star"/>
                <Scatter name='Amount of Law Offences Related to Drug Use' data={data} fill='#DEDEDE' shape="star"/>
              </ScatterChart>
            </div>
          </div>
        }
      </div>
    )
  }
}