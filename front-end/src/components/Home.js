import React from 'react'
import rr from '../images/rickroll.png'
import './Home.css'

const Home = () => {
  return (
    <div id="home">
      <div>
        <h2>Dollars Bank</h2>
        <div id="button-container">
          <i className="fas fa-envelope-square" style={{fontSize:"24px"}}></i>
          <button type="button" class="btn btn-danger">Login</button>
          <button type="button" class="btn btn-danger">Register</button>
        </div>
      </div>
      <div>
        <img src={rr} alt="Money Meme"></img>
        <hr/>
      </div>
    </div>
  )
}

export default Home
