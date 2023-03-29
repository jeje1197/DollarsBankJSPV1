import React from 'react'

const Alert = ({ message, successful }) => {
  return (
    <div className={"alert " + (successful ? "alert-success" : "alert-danger")} role="alert" 
    style={{display: "none"}}>
        This is a success alert—check it out!
    </div>
  )
}

export default Alert
