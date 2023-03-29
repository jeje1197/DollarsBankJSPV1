import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BankApi from '../api/BankApi'
import './AccountHome.css'
import CustomerInfoModal from './CustomerInfoModal'

const AccountHome = ({ userData }) => {
  const [accountDetails, setAccountDetails] = useState({
    id: userData.id,
    name: "",
    email: "",
    phone: "",
    balance: 0.0,
    transactions: ["Transaction 1", "Transaction 2", "Transaction 3", "Transaction 4", "Transaction 5"]
  })

  const navigate = useNavigate()
  const handleLogout = () => {
    userData.id = -1
    navigate("/")
  }

  useEffect(() => {
    if (userData.id === -1) {
      navigate("/")
      return
    }

    BankApi.getAccountInformation({
      id: userData.id
    })
    .then(data => {
      setAccountDetails(data)
    })
    .catch(error => {
      console.error(error)
    })
    
  }, [userData, navigate])

  return (
    <div id="account-home">
        <h1>Welcome, {accountDetails.name}!</h1>
        <h5>Account Balance: ${accountDetails.balance}</h5>

        <div id="account-options">
          <h3>What would you like to do?</h3>
          <div>
            <button type="button" className="btn btn-info">Deposit</button>
            <button type="button" className="btn btn-info">Withdraw</button>
            <button type="button" className="btn btn-info">Transfer</button>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#customerInfoModal">View Customer Info</button>
            <button type="button" className="btn btn-info" onClick={handleLogout}>Logout</button>
          </div>
        </div>

        <div id="recent-transactions" className="card">
          <div className="card-header">
            Recent Transactions
          </div>
          <div className="card-body">
            <h5 className="card-title">Checking Account</h5>
            {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
            <ul className="list-group list-group-flush">
              {
                accountDetails.transactions ? accountDetails.transactions.map((transaction, key) => {
                  return (<li key={key} className="list-group-item">{ transaction }</li>)
                }) 
                : <li className="list-group-item"> No Transactions </li>
              }
            </ul>
          </div>
        </div>
        <CustomerInfoModal name={accountDetails.name} email={accountDetails.email} phone={accountDetails.phone}/>
    </div>
  )
}

export default AccountHome
