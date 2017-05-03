const css = require('./app.scss');
import axios from 'axios'

let stateLeft = 0;
let stateRight = 0;

function handleStates(state){
  console.log(stateLeft, stateRight)
  switch(state) {
    case 0:
    return `<p class="rifth1">Click here to activiate the first filter</p>`
      break;

    case 1:
    return `<p class="rifth1">Now click on one of the filter items</p>`
      break;

    case 2:
    return  `<span class='close' /><p class="rifth1">Click inside the filter to reset it</p>`
      break;

    case 3:
    return `<p class="rifth1">Now click on one of the filter items</p>`

    default:
      console.log(`Error. State ${state} not defined`)
  }
}



// GET JSON FILES
function getJSON(data) {
  axios.get(data)
    .then((resolve) => {
      console.log(resolve.data)

      let content, selector;

      resolve.data.map((item) =>
        content += 
        `<p class="${item.Country.replace(' ', '_')}">
          Country: ${item.Country}, Total overall: ${item.Total_overall_per_10k}
        </p>`
      )

      //leftside 
      if (stateLeft === 1) {
        selector = document.querySelector('#leftside')
      } else if (stateLeft === 2) {
        selector = document.querySelector('#leftside')
      } 
      //rightside
      if (stateRight === 1) {
        selector = document.querySelector('#rightside')
      } else if (stateRight === 2) {
        selector = document.querySelector('#rightside')
      } 

      if (stateLeft === 2 || stateRight === 2) {
        selector.innerHTML += content
        selector.classList.add(data.replace('./data/', '').replace('.json', ''))
      }
    })
}

// NAVIGATION
function navHandling() {
  const nav = document.querySelector('#nav-all')
  nav.addEventListener('click', (e) => {
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


navHandling()
const sides = document.querySelectorAll('.side')
const nav = document.querySelector('#nav-all')

sides.forEach((side) => {
  side.addEventListener('click', (e) => {
    console.log(e.target)
    let selector;
    if (e.target.id === 'leftside' || e.target.id === 'rightside') {
      selector = e.target.id
      e.target.classList.add('active')
    } else if (e.target.parentElement.id === 'leftside' || e.target.parentElement.id === 'rightside') {
      selector = e.target.parentElement.id
    } else if (e.target.parentElement.parentElement.id === 'leftside' || e.target.parentElement.parentElement.id === 'rightside') {
      selector = e.target.parentElement.parentElement.id
    }

    selector === 'leftside' 
      ? document.querySelector(`#${selector}`).innerHTML = handleStates(stateLeft == 0 ? stateLeft = 1 : stateLeft = 3)
      : document.querySelector(`#${selector}`).innerHTML = handleStates(stateRight == 0 ? stateRight = 1 : stateRight = 3)
  })
})

nav.addEventListener('click', (e) => {
  if (handleStates(stateLeft == 1 )) {document.querySelector(`#leftside`).innerHTML = handleStates(stateLeft = 2)}
  if (handleStates(stateRight == 1)) {document.querySelector(`#rightside`).innerHTML = handleStates(stateRight = 2)} 
})

window.addEventListener('load', () => {
  document.querySelectorAll(`.side .instruction`).forEach((side) => {
    side.innerHTML = handleStates(0)
  })
})

// #TODO unfuck alles plz




// document.querySelector('.content_druguse .France').addEventListener('mouseenter', () => {
//   // run function for france
//   D3.run('france');
// })