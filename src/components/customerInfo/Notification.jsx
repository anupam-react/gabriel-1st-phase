import React from 'react'

const Notification = ({handleOpen}) => {
  return (
<div className="notification-container">
      <div className="notification-main">
        <p className="title">Send a push notification note</p>
        <img
          src="./Mask group (2).png"
          alt=""
          className="cross-image"
          onClick={() =>  handleOpen(false)}
        />
      </div>
      <hr className="hr" />
      <div className="form-container">
     
        <div className="input-container">
          <label>Custom Message</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50" className="input" value="Don’t miss out on special student offers. If you’re a student, verify your student status today in the Moneychat app" />
        </div>
       
    
          </div>
          <div className="flex-center">
           <button className="menuButton">SEND NOTIFICATION</button> 
          </div>
    </div>
  )
}

export default Notification
