import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import AuthModalContext from "../context/AuthModalContext";

const ErrorModal = () => {
  const { errorStatus, setErrorStatus, modalType, setModalType, authReg, setAuthReg  } = useContext(ModalContext);
  const { modalVisibility, setModalVisibility } = useContext(AuthModalContext)
  console.log(authReg)
  return (
    <>
      {errorStatus && (
        <div className="forgot-page">
          <div className="forgot-sub">
            <div className="text-and-div">
              <p
              // onClick={() => {
              //   setForgotStage("");
              // }}
              >
                {errorStatus}
              </p>

              <button onClick={()=> {setErrorStatus("");setModalVisibility("auth-page");setModalType("register")}} className="verify-otp">Sign Up</button>
            </div>
          </div>
        </div>
      )}
      {
        authReg && (
          <div className="forgot-page">
          <div className="forgot-sub">
            <div className="text-and-div">
              <p
              // onClick={() => {
              //   setForgotStage("");
              // }}
              >
                {authReg}
              </p>

              <button onClick={()=> {setAuthReg("");setModalVisibility("auth-page");setModalType("login")}} className="verify-otp">Login</button>
            </div>
          </div>
        </div>
        )
      
      }
    </>
  );
};

export default ErrorModal;
