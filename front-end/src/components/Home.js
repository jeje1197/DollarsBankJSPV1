import React from 'react'
import rr from '../images/rickroll.png'
import './Home.css'
import LoginModal from './LoginModal'

const Home = () => {
  return (
    <div id="home">
      <div id="title-and-buttons-container">
        <h1>Dollars Bank</h1>
        <div id="button-container">
            <i className="fas fa-user-alt" style={{
              fontSize: "18px",
              marginLeft: "8px",
              marginBottom: "2px"
            }}></i>
          <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#loginModal">Login</button>
          <button type="button" class="btn btn-danger">Register</button>
        </div>
      </div>
      <div id="testimonial">
        <img src={rr} alt="Money Meme"></img>
        <div style={{
          backgroundColor: "blue"
        }}>
          <p>Pioneers of Banking Worldwide!</p>
          <p>
            Rated &nbsp;
            <span className="fa fa-star checked my-rating" style={{fontSize:"18px", color: "yellow"}}></span>
            <span className="fa fa-star checked my-rating" style={{fontSize:"18px", color: "yellow"}}></span>
            <span className="fa fa-star checked my-rating" style={{fontSize:"18px", color: "yellow"}}></span>
            <span className="fa fa-star checked my-rating" style={{fontSize:"18px", color: "yellow"}}></span>
            <span className="fa fa-star checked my-rating" style={{fontSize:"18px", color: "yellow"}}></span>
            &nbsp; by our global customers
            </p>
          <p>Enjoy banking with us!</p>
        </div>
        <hr/>
      </div>
      {
        <LoginModal />
      }
    </div>
  )
}

export default Home
