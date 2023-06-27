import { useState, useContext } from "react";
import ModalContext from "../context/ModalContext";
import Input from "./Input";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const { forgotStage, setForgotStage } = useContext(ModalContext);

  const sendOtp = async (e) => {
    e.preventDefault();
    const otp = Math.floor(Math.random() * 9000 + 1000);
    const data = { email, otp };
    console.log(otp);
    try {
      const response = await axios.post("/send_recovery_email", data);
      console.log(response);
      setResetMessage(response.data);
      if(response.data === true) {
        setForgotStage("otp")
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">
        {/* <p onClick={()=> {setForgotStage("otp")}}>ForgotPassword</p> */}
        <form onSubmit={sendOtp}>
          <label required>
            <p>Enter your E-mail: </p>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="otp-div">
            <button type="submit" className="send-otp-btn">
              {" "}
              Send OTP
            </button>
          </div>
        </form>
        {resetMessage && (
          <div>
            <p className="reset-message">{resetMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
