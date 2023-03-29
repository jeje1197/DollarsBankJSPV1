import React, { useEffect, useState } from 'react'
import BankApi from '../api/BankApi'

const AccountHome = ({ userData }) => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    phone: "",
    balance: null,
  })

  useEffect(() => {
    BankApi.getBalance({
      id: userData.id
    })
    .then(data => {
      accountDetails.balance = data.balance
      console.log("Balance: " + data)
    })
    .catch(error => {
      console.error(error)
    })
  }, [userData, accountDetails])

  return (
    <div>
        <h1>Welcome, {accountDetails.name}!</h1>
        <p>Account Balance: {accountDetails.balance}</p>
    </div>
  )
}

export default AccountHome
