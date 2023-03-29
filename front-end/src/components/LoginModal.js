import React from 'react'
import BankApi from '../api/BankApi'
import { useNavigate } from "react-router-dom";

import './LoginModal.css'

const LoginModal = ({ userData }) => {
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    const loginData = {
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value
    }

    BankApi.login(loginData)
    .then(data => {
      userData.id = data.id
      if (data) {
        navigate("/account")
      }
    })
    .catch(error => {
      // console.error(error)
      alert("Failed to login.")
    })
  }

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
          </div>

          <form action="/">
            <div className="modal-body">
              {/* Username Input Field */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                  </span>
                </div>
                <input
                  id="login-username"
                  type="text"
                  className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Username"
                  required
                />
              </div>

              {/* Password Input Field */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-lock" style={{fontSize: "18px"}}></i>
                  </span>
                </div>
                <input
                  id="login-password"
                  type="text" 
                  className="form-control"
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Password"
                  required
                />
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button 
                type="submit" 
                className="btn btn-primary"
                onClick={(event) => handleLogin(event)}
                data-toggle="modal"
                data-target="#loginModal">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
