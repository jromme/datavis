const css = require('./app.scss');
import axios from 'axios'

// GET JSON FILES
function getJSON(data, element) {
  axios.get(data)
    .then((resolve) => {
      console.log(resolve.data)

      let content

      resolve.data.map((item) =>
        content += 
        `<p class="${item.Country.replace(' ', '_')}">
          Country: ${item.Country}, Total overall: ${item.Total_overall_per_10k}
        </p>`
      )

      element.innerHTML = content;
    })
}

// NAVIGATION
function navHandling() {
  const nav = document.querySelector('#nav-all')
  nav.addEventListener('click', (e) => {
    switch(e.target.id) {
      //drug use
      case 'nav-druguse':
        getJSON('./data/content_druguse.json', document.querySelector('#content'))
        break;
 
      case 'nav-druguse-ats':
        getJSON('./data/content_druguse_ats.json', document.querySelector('#content'))
        break;

      case 'nav-druguse-cocaine':
        getJSON('./data/content_druguse_cocaine.json', document.querySelector('#content'))
        break;

      case 'nav-druguse-cannabis':
        getJSON('./data/content_druguse_cannabis.json', document.querySelector('#content'))
        break;

      //happiness
      case 'nav-happiness':
        getJSON('./data/content_happiness.json', document.querySelector('#content'))
        break;

      //overdose deaths
      case 'nav-overdose-deaths':
        console.log('clicked')
        getJSON('./data/content_overdose-deaths.json', document.querySelector('#content'))
        break;

      //price
      case 'nav-price':
        getJSON('./data/content_price.json', document.querySelector('#content'))
        break;

      case 'nav-price-ats':
        getJSON('./data/content_price_ats.json', document.querySelector('#content'))
        break;

      case 'nav-price-cocaine':
        getJSON('./data/content_price_cocaine.json', document.querySelector('#content'))
        break;

      case 'nav-price-cannabis':
        getJSON('./data/content_price_cannabis.json', document.querySelector('#content'))
        break;

      case 'nav-price-heroin':
        getJSON('./data/content_price_heroin.json', document.querySelector('#content'))
        break;


      //law offences
      case 'nav-law-offences':
        getJSON('./data/content_offences_total.json', document.querySelector('#content'))
        break;

      case 'nav-law-offences-ats':
        getJSON('./data/content_offences_ats.json', document.querySelector('#content'))
        break;

      case 'nav-law-offences-cocaine':
        getJSON('./data/content_offences_cocaine.json', document.querySelector('#content'))
        break;

      case 'nav-law-offences-cannabis':
        getJSON('./data/content_offences_cannabis.json', document.querySelector('#content'))
        break;

      case 'nav-law-offences-heroin':
        getJSON('./data/content_offences_heroin.json', document.querySelector('#content'))
        break;





      default:
        console.error('Nothing clicked')
    }
  })
}


navHandling()
