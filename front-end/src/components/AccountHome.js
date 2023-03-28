import React, { useEffect } from 'react'

const AccountHome = (userData) => {
    useEffect(() => {
      
    }, [])

  return (
    <div>
        <h1>Welcome, {userData.username}!</h1>
        <p>Account Balance: {userData.account}</p>
        
    </div>
  )
}

export default AccountHome
