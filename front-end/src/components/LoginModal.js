import React from 'react'

const LoginModal = () => {
  return (
    <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
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
              <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </div>

            {/* Password Input Field */}
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                <i className="fas fa-lock" style={{fontSize: "18px"}}></i>
                </span>
              </div>
              <input 
                type="text" 
                className="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"

              />
            </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginModal
