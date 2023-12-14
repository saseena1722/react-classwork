import React,{ useState } from "react"
import './LoginSignUp.css'
import user_icon from '../Assets/person.png.jpg'
import email_icon from '../Assets/email.png.jpg'
import password_icon from '../Assets/password.png.jpg'
import call_icon from '../Assets/call.png.jpg'
const LoginSignUp = () => {

    const[action,setAction]= useState("Login");
  return (
    <div className="insert_image">
    
    <div class='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        
        </div>
        <div className="inputs">
    <div className="input">
        <img src={user_icon} alt=""/>
              <input type="name" placeholder= " Name" required/>
            </div>
    
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder =" Email" required></input>
            </div>
            {action==="Login"?<div></div>:<div className="input">
                <img src={call_icon} alt=""/>
                <input type="Mob no" placeholder =" Mob no" required></input>
            </div>}
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password"placeholder="Password" required></input>
            </div>
    </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">  forget password? <span>Click here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        
                
        </div>
        </div>
    
    </div>
  )
}
export default LoginSignUp; 

