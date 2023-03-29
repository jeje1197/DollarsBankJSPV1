import React from 'react'
import BankApi from '../api/BankApi'
import './RegisterModal.css'

const RegisterModal = () => {

  const handleRegistration = () => {
    BankApi.register({
      name: document.getElementById("register-name").value,
      email: document.getElementById("register-email").value,
      phone: document.getElementById("register-phone").value,
      username: document.getElementById("register-username").value,
      password: document.getElementById("register-password").value
    })
    .then(data => {
      console.log("Successfully registered account!" + data)
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div className="modal fade" id="registerModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Register</h5>
          </div>
          <div className="modal-body">

            {/* Name Input Field */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                </span>
              </div>
              <input
                id="register-name"
                type="text" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Name"
              />
            </div>

            {/* Email Input Field */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                </span>
              </div>
              <input
                id="register-email"
                type="email" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Email Address"
              />
            </div>

            {/* Phone Number Input Field */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                </span>
              </div>
              <input
                id="register-phone"
                type="number" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Phone Number"
              />
            </div>

            {/* Username Input Field */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                </span>
              </div>
              <input
                id="register-username"
                type="text" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Username"
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
                id="register-password"
                type="text" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Password"
              />
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleRegistration}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterModal