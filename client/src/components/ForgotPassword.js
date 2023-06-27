import { useState, useContext, useEffect } from "react";
import ModalContext from "../context/ModalContext";
import Otp from "./Otp";
import Input from "./Input";
import { AiOutlineInfoCircle } from "react-icons/ai";
import axios from "axios";
// import { BsFillBrightnessHighFill } from "react-icons/bs";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const { forgotStage, setForgotStage, otp, setOtp, userEmail, setUserEmail } =
    useContext(ModalContext);

  const sendOtp = async (e) => {
    e.preventDefault();
    const randomCode = Math.floor(Math.random() * 9000 + 1000);

    // setOtp(randomCode);
    // console.log(otp);
    const data = { email, randomCode };
    //
    try {
      const response = await axios.post("/send_recovery_email", data);

      setResetMessage(response.data);
      if (response.data.otpVerified === true) {
        setOtp(response.data.randomCode);
        setUserEmail(response.data.email);

        setForgotStage("otp");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">
        {/* <p onClick={()=> {setForgotStage("otp")}}>ForgotPassword</p> */}
        <form className="forgot-form" onSubmit={sendOtp}>

            <p className="enter-email">Enter your E-mail: </p>
            <div className="text-and-div">
              <input
                // required
                className="input input-box margin-left"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setResetMessage("");
                }}
              />
              
                     
                        <button type="submit" className="verify-otp">
              {" "}
              Send OTP
                        </button>
            </div>

        </form>
        {resetMessage && (
          <div>
            {/* <AiOutlineInfoCircle />  */}
            <p className="reset-message">{resetMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
