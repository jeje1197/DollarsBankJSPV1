import React from 'react'

const CustomerInfoModal = ({name, email, phone}) => {
  return (
    <div className="modal fade" id="customerInfoModal" tabIndex="-1" role="dialog" aria-labelledby="registerModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Customer Information</h5>
          </div>
          <div className="modal-body">
          <table className="table table-dark">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
            </tr>
            </tbody>
        </table>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerInfoModal
