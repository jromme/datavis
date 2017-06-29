import React, { Component } from 'react'
import InfoGrid from '../InfoGrid'
import ChartComponent from '../ChartComponent'
import Footer from '../Footer'

export default class Content extends Component {
    render(){
        const { data, navitem, year } = this.props
        return (  
            <div id="content">
              <div id="overflowing">
                {navitem === 'nav-druguse' && <ChartComponent data={data} type={'druguse'} />}
                {navitem === 'nav-happiness' && <InfoGrid data={data} type='happiness' />}
                {navitem === 'nav-overdose-deaths' && <ChartComponent data={data} type={'overdosedeaths'} year={year}/>}
                {navitem === 'nav-price' && <ChartComponent data={data} type={'price'} year={year} />}
                {navitem === 'nav-law-offences' && <ChartComponent data={data} type={'lawoffences'} year={year} />}
                <Footer />
              </div>
            </div>
        )
    }
}