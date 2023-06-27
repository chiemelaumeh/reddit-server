import { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import { AiOutlineClose } from "react-icons/ai";

const Otp = () => {
  const { forgotStage, setForgotStage, otp, setOtp } = useContext(ModalContext);
  const [otpInput, setOtpInput] = useState(["","","",""])
  const [wrongOtp, setWrongOtp] = useState("")
//  console.log(otp)

  function verifyOtp() {
   if(parseInt(otpInput.join("")) === otp) {
  setForgotStage("reset");
  return
  }
  setWrongOtp("The code you have entered is incorrect, try again or resend link")

  }

  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">
        <div className="verification-h3">
          
          <div className="header-icon">
            <p> We have sent a code to your email</p>
            <AiOutlineClose className="icon" onClickCapture={()=>{setForgotStage("")}}/>
          </div>
        </div>
        <div className="otp-boxes">
          <input value={otpInput[0]} maxLength={1} onChange={(e)=>{setOtpInput([e.target.value, otpInput[1], otpInput[2],otpInput[3]])}} type="text" className="otp-box" />
          <input value={otpInput[1]} maxLength={1} onChange={(e)=>{setOtpInput([otpInput[0], e.target.value, otpInput[2],otpInput[3]])}} type="text" className="otp-box" />
          <input value={otpInput[2]} maxLength={1} onChange={(e)=>{setOtpInput([otpInput[0], otpInput[1], e.target.value,otpInput[3]])}}  type="text" className="otp-box" />
          <input value={otpInput[3]} maxLength={1} onChange={(e)=>{setOtpInput([otpInput[0], otpInput[1], otpInput[2],e.target.value])}} type="text" className="otp-box" />
        </div>

        <div className="verify-div">
          <button
            className="verify-otp"
            onClick={() => {
              // setForgotStage("reset");
              verifyOtp()
            }}
          >
            Verify OTP
          </button>
          
        </div>
       {
        wrongOtp && (
          <p className="reset-message">The code you have entered is incorrect, try again or resend link</p>

        )
       }
      </div>
    </div>
  );
};

export default Otp;
