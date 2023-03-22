import React from 'react'
import rr from '../images/rickroll.png'
import './Home.css'

const Home = () => {
  return (
    <div id="home">
      <div>
        <h2>Dollars Bank</h2>
        <div>Buttons Here</div>
      </div>
      <div>
        <img src={rr} alt="Money Meme"></img>
        <hr/>
      </div>
    </div>
  )
}

export default Home
