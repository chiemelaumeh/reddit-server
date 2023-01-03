import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import { useState } from "react";

const Authmodal = () => {

     
  
  const [modalType, setModalType] = useState("login");
  return (
    <div className="auth-page">
      <div className="auth-sub">
        {modalType === "login" && <h1>Login</h1>}
        {modalType === "register" && <h1>Register</h1>}
        <label>
          <span>Username: </span>
          <Input type="text" />
        </label>
        <label>
          <span>Password: </span>

          <Input type="password" />
        </label>
        <Headerbuttons>Login</Headerbuttons>
        {modalType === "login" && (
           <div className="login-state">
           <p className="login-p-1">New to Reddit?</p>
           <button className="btn" onClick={() => setModalType("register")}>
             SIGN UP
           </button>
         </div>
       
        )}
        {modalType === "register" && (
          <div className="login-state">
            <p className="login-p-1">Already have an account?</p>
            <button className="btn" onClick={() => setModalType("login")}>
              LOG IN
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Authmodal;
