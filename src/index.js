import React from 'react'
import ReactDom from 'react-dom'

// Use "className=" instead of "class="

// const Footer = () => {
//   return <h1>Hello World</h1> //Opening Tags MUST be on the same line as return, or you can use return ()
// }


// CSS
import './main.css'

const RenderList = props => {
  const cars = [
  { id: 1, name: "Toyota MR2", img: "assets/images/mr2.jpg", desc: "A Japanese Car" },
  { id: 2, name: "Lexus IS300", img: "assets/images/is300.jpg", desc: "Another Japanese Car" },
  { id: 3, name: "Nissan Silvia", img: "assets/images/s14.jpg", desc: "Yet Another Japanese Car" }
  ];

  return (
    <div className="list-box">
      {cars.map(car => (
        <div key={car.id}>
          <h2>{car.name}</h2>
          <img src={car.img} alt={car.desc} className="car-img"/>
        </div>
      ))}
    </div>
  )
}


// const Carpicture = () => { return <img className="car-img" src="assets/images/bmwm3.jpeg" alt="A bimmer" /> }

// const Cartitle = () => { return <h2>1990 BMW M3</h2> }

// const Cardesc = () => { return <p>The best german car of the 90's</p> }

const Carlist = () => { 
  return (
    <section>
        <RenderList/>
    </section>
  )
 }

const App = () => {
  return (
    <div className="list-contain">
      <Carlist />
    </div>
  )
}

ReactDom.render(<App/>,document.getElementById('root'))