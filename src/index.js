import React from 'react'
import ReactDom from 'react-dom'

// Use "className=" instead of "class="

// const Footer = () => {
//   return <h1>Hello World</h1> //Opening Tags MUST be on the same line as return, or you can use return ()
// }


// CSS
import './main.css'

const Carpicture = () => { return <img className="car-img" src="assets/images/bmwm3.jpeg" alt="A bimmer" /> }

const Cartitle = () => { return <h2>1990 BMW M3</h2> }

const Cardesc = () => { return <p>The best german car of the 90's</p> }

const Carlist = () => { 
  return (
    <section className="list-box">
      <div className="img-box">
        <Carpicture/>
        <Cartitle/>
        <Cardesc/>
      </div>
    </section>
  )
 }

const App = () => {
  return (
    <div className="list-contain">
      <Carlist />
      <Carlist />
      <Carlist />
      <Carlist />
      <Carlist />
      <Carlist />
    </div>
  )
}

ReactDom.render(<App/>,document.getElementById('root'))