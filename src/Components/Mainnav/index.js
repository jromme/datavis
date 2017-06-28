import React, { Component } from 'react'
import axios from 'axios'



export default class Mainnav extends Component {
    // NAVIGATION
    // GET JSON FILES


  

  NavHandling() {
  const nav = document.querySelector('#nav-all')



      nav.addEventListener('click', (e) => {
        function getJSON(data) {
          axios.get(data)
            .then((resolve) => {
              let content, selector;

              resolve.data.map((item) =>
                content += 
                `<p class="${item.Country.replace(' ', '_')}">
                  Country: ${item.Country}, Total overall: ${item.Total_overall_per_10k}
                </p>`
              )
            })
        }

        switch(e.target.id) {
          //drug use
          case 'nav-druguse':
            getJSON('./data/content_druguse.json')
            break;
     
          case 'nav-druguse-ats':
            getJSON('./data/content_druguse_ats.json')
            break;

          case 'nav-druguse-cocaine':
            getJSON('./data/content_druguse_cocaine.json')
            break;

          case 'nav-druguse-cannabis':
            getJSON('./data/content_druguse_cannabis.json')
            break;

          //happiness
          case 'nav-happiness':
            getJSON('./data/content_happiness.json')
            break;

          //overdose deaths
          case 'nav-overdose-deaths':
            getJSON('./data/content_overdose-deaths.json')
            break;

          //price
          case 'nav-price':
            getJSON('./data/content_price.json')
            break;

          case 'nav-price-ats':
            getJSON('./data/content_price_ats.json')
            break;

          case 'nav-price-cocaine':
            getJSON('./data/content_price_cocaine.json')
            break;

          case 'nav-price-cannabis':
            getJSON('./data/content_price_cannabis.json')
            break;

          case 'nav-price-heroin':
            getJSON('./data/content_price_heroin.json')
            break;


          //law offences
          case 'nav-law-offences':
            getJSON('./data/content_offences_total.json')
            break;

          case 'nav-law-offences-ats':
            getJSON('./data/content_offences_ats.json')
            break;

          case 'nav-law-offences-cocaine':
            getJSON('./data/content_offences_cocaine.json')
            break;

          case 'nav-law-offences-cannabis':
            getJSON('./data/content_offences_cannabis.json')
            break;

          case 'nav-law-offences-heroin':
            getJSON('./data/content_offences_heroin.json')
            break;

          default:
            console.error('Nothing clicked')
        }
      })
    }

    render() {
      const { handler, navitem } = this.props
      return (
        <nav id="nav-all" className="main-nav">
          <ul>
            <li id="nav-druguse" onClick={()=> handler('nav-druguse')} className={navitem === 'nav-druguse' ? 'active rifth1' : 'rifth1'}>Drug use</li>
          </ul>
          <ul>
            <li id="nav-happiness" onClick={()=> handler('nav-happiness')} className={navitem === 'nav-happiness' ? 'active rifth1' : 'rifth1'}>Happiness</li>
          </ul>
          <ul>
            <li id="nav-overdose-deaths" onClick={()=> handler('nav-overdose-deaths')} className={navitem === 'nav-overdose-deaths' ? 'active rifth1' : 'rifth1'}>Overdose deaths</li>
          </ul>
          <ul>
            <li id="nav-price" onClick={()=> handler('nav-price')} className={navitem === 'nav-price' ? 'active rifth1' : 'rifth1'}>Price</li>
          </ul>
          <ul>
            <li id="nav-law-offences" onClick={()=> handler('nav-law-offences')} className={navitem === 'nav-law-offences' ? 'active rifth1' : 'rifth1'}>Law Offences</li>
          </ul>
        </nav>
      )
    }
}

