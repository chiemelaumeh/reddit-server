import { useContext } from "react";
import ModalContext from "../context/ModalContext";




const ForgotPassword = () => {
  const { forgotStage, setForgotStage } = useContext(ModalContext);
  return (
    <div className={forgotStage ? "auth-page" : "hide-auth-page"}>
      <div className="auth-sub">
        <p onClick={()=> {setForgotStage("otp")}}>ForgotPassword</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
