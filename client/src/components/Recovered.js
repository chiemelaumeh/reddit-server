import { useContext } from "react";
import ModalContext from "../context/ModalContext";

const Recovered = () => {
  const { forgotStage, setForgotStage } = useContext(ModalContext);
  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">

        <div className="text-and-div">
          <p
            onClick={() => {
              setForgotStage("");
            }}
          >
            Password successfully changed
          </p>
        
            <button onClick={() => setForgotStage("")} className="verify-otp">Okay</button>
      
        </div>
      </div>
    </div>
  );
};

export default Recovered;
