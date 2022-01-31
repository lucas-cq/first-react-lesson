import React from 'react'
import ReactDom from 'react-dom'

// Use "className=" instead of "class="

const Footer = () => {
  return <h1>Hello World</h1> //Opening Tags MUST be on the same line as return, or you can use return ()
}

ReactDom.render(<Footer/>,document.getElementById('root'))