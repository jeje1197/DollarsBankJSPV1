import React from 'react'
import { useNavigate } from 'react-router-dom'
import BankApi from '../api/BankApi'

const DepositModal = ({ accountDetails }) => {
    const navigate = useNavigate()

    const handleDeposit = (event) => {
        event.preventDefault()

        const depositData = {
            id: accountDetails.id,
            amount: document.getElementById("deposit-amount").value
        }

        BankApi.deposit(depositData)
        .then(data => {
            alert("Deposit successful!")
            accountDetails.balance = data.balance
            navigate("/account")
        })
        .catch(error => {
            // console.error(error)
            alert(`Invalid deposit amount. Number must be greater than $0.`)
        })
    }

  return (
    <div className="modal fade" id="depositModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Deposit</h5>
          </div>

          <form action="/">
            <div className="modal-body">
              {/* Amount Input Field */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                  </span>
                </div>
                <input
                  id="deposit-amount"
                  type="number"
                  className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Amount"
                  required
                />
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
              <button 
                type="submit" 
                className="btn btn-primary"
                onClick={(event) => handleDeposit(event)}
                data-dismiss="modal">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DepositModal
