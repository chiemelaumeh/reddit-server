import { useContext } from "react";
import ModalContext from "../context/ModalContext";

const Otp = () => {
  const { forgotStage, setForgotStage } = useContext(ModalContext);
  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">
        <div className="verification-h3">
          
          <p> We have sent a code to your email</p>
        </div>
        <div className="otp-boxes">
          <input type="text" className="otp-box" />
          <input type="text" className="otp-box" />
          <input type="text" className="otp-box" />
          <input type="text" className="otp-box" />
        </div>

        <div className="verify-div">
          <button
            className="verify-otp"
            onClick={() => {
              setForgotStage("reset");
            }}
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
