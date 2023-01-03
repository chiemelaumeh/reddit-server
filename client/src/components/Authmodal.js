import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import { useState } from "react";

const Authmodal = () => {
  const [modalType, setModalType] = useState("login");
  return (
    <div className="auth-page">
      <div className="auth-sub">
        {modalType === "login" && (

        <h1>Login</h1>
        )}
        {modalType === "register" && (

        <h1>Register</h1>
        )}
        <label>
          <span>Username: </span>
          <Input type="text" />
        </label>
        <label>
          <span>Password: </span>

          <Input type="password" />
        </label>
        <Headerbuttons>Login</Headerbuttons>
        <div>
          New to Reddit? <button>SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Authmodal;
