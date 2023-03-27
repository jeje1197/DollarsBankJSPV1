import React from 'react'
import BankApi from '../api/BankApi'
import './LoginModal.css'

const LoginModal = () => {
  const handleLogin = () => {
    BankApi.login({
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value
    })
  }

  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
          </div>
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
                pattern=".+"
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
                pattern=".+"
                required
              />
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
