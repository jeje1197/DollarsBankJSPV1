import React from 'react'
import { useNavigate } from 'react-router-dom'
import BankApi from '../api/BankApi'

const TransferModal = ({ accountDetails }) => {
    const navigate = useNavigate()

    const handleTransfer = (event) => {
        event.preventDefault()

        const transferData = {
            userAccountid: accountDetails.id,
            otherAccountId: Number(document.getElementById("other-account-id").value),
            amount: Number(document.getElementById("transfer-amount").value)
        }

        if (transferData.amount <= 0 || transferData.amount > accountDetails.balance) {
            alert(`Invalid transfer amount. Number must be greater than $0 and less than or equal to ${accountDetails.balance}`)
            return
        }

        BankApi.transfer(transferData)
        .then(data => {
            alert("Transfer successful!")
            accountDetails.balance = data.balance
            navigate("/account")
        })
        .catch(error => {
            // console.error(error)
            alert(`Transfer could not be made. Make sure the account ID is correct.`)
        })
    }

  return (
    <div className="modal fade" id="transferModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Transfer Funds</h5>
          </div>

          <form action="/">
            <div className="modal-body">
              {/* Other Account Id */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                  </span>
                </div>
                <input
                  id="other-account-id"
                  type="number"
                  className="form-control" 
                  aria-label="Default" 
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Other Account's ID"
                  required
                />
              </div>

              {/* Amount Input Field */}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-user-alt" style={{ fontSize: "18px"}}></i>
                  </span>
                </div>
                <input
                  id="transfer-amount"
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
                onClick={(event) => handleTransfer(event)}
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

export default TransferModal
