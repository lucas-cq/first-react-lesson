import React from 'react'
import ReactDom from 'react-dom'

// Use "className=" instead of "class="

// const Footer = () => {
//   return <h1>Hello World</h1> //Opening Tags MUST be on the same line as return, or you can use return ()
// }

const Header = () => {
  return <header>
    <nav>
      <div>
      <svg width="80" height="80" viewBox="0 0 382 382" fill="none" xmlns="http://www.w3.org/2000/svg" alt="My main logo">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z" fill="#FF5D73"/>
          <path d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z" fill="#FF5D73"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M200.628 381C301.088 375.983 381 292.89 381 191.12C381 86.1196 295.934 1 191 1C180.792 1 170.772 1.80553 161 3.35652V341.477L298 261.252V323.98L200.628 381ZM191 93.0517L290 42.0259V89.904L231.308 120.154V217.618L297 179.922V226.062L234.294 262.045L234.308 262.045L233.855 262.297L231.207 263.816L231.187 263.781L191.216 286.015L191.305 263.215L191.308 263.215V93.5349L191 93.0517Z"/>
          <path d="M110 19.0928C45.5776 49.5179 1 115.11 1 191.12C1 267.13 45.5776 332.722 110 363.147V19.0928Z"/>
        </svg>
      </div>
      <ul>
        <li>About</li>
        <li>Skills</li>
        <li>My Journey</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
}

const Footer = () => {
  return <footer>
    <div>
      <h2>Lucas Cummings</h2>
      <ul>
        <li>CSS</li>
        <li>Journey</li>
        <li>Projects</li>
      </ul>
      <ul>
        <h3>Follow Me</h3>
        <li><a href="https://twitter.com/lucas_nuxt">Twitter</a></li>
        <li><a href="https://www.instagram.com/lucas.nuxt/">Instagram</a></li>
        <li><a href="https://github.com/lucas-cq">Github</a></li>
      </ul>
      <ul>
        <h3>Get In Touch</h3>
        <li><a href="mailto:lucas.cummings024@gmail.com">Email</a></li>
        <li>587-123-4567</li>
      </ul>
    </div>
      <p>This website is protected under an MIT License &copy;</p>
  </footer>
}

const Home = () => {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

ReactDom.render(<Home/>,document.getElementById('root'))