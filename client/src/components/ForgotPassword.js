import { useState, useContext, useEffect } from "react";
import ModalContext from "../context/ModalContext";
import Otp from "./Otp";
import Input from "./Input";
import { AiOutlineClose } from "react-icons/ai";
import OutsideClickHandler from "react-outside-click-handler";
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
        {/* <OutsideClickHandler onOutsideClick={()=> setForgotStage("")}> */}
        <div className="forgot-sub">

          {/* <p onClick={()=> {setForgotStage("otp")}}>ForgotPassword</p> */}
          <div className="header-icon">
              <p className="enter-email">Enter your E-mail: </p>
                <AiOutlineClose className="icon" onClickCapture={()=>{setForgotStage("")}}/>
            </div>
          <form className="forgot-form" onSubmit={sendOtp}>
            <div className="text-and-div">
              <input
                // required
                className="forgot-sub-input margin-left"
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
    {/* </OutsideClickHandler> */}
      </div>
  );
};

export default ForgotPassword;
