import React from 'react'
import rr from '../images/rickroll.png'
import './Home.css'

const Home = () => {
  return (
    <div id="home">
      <div>
        <h2>Dollars Bank</h2>
        <div id="button-container">
            <i className="fas fa-user-alt" style={{
              fontSize: "18px",
              marginLeft: "5px" 
            }}></i>
          <button type="button" class="btn btn-danger">Login</button>
          <button type="button" class="btn btn-danger">Register</button>
        </div>
      </div>
      <div>
        <img src={rr} alt="Money Meme"></img>
        <div>
          <p>Pioneers of Banking Worldwide!</p>
          <p>Rated by our global customers</p>
          <p>Enjoy banking with us!</p>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default Home
