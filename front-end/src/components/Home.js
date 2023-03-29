import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import rr from '../images/rickroll.png'
import './Home.css'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'

const Home = ({userData, setShowSpinner}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (userData.id !== -1) {
      navigate("/account")
    }
  }, [userData, navigate])

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
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#loginModal">Login</button>
          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#registerModal">Register</button>
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

      <LoginModal userData={userData} setShowSpinner={setShowSpinner}/>
      <RegisterModal userData={userData} setShowSpinner={setShowSpinner}/>
    </div>
  )
}

export default Home
