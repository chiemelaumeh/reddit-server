import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import AuthModalContext from "../context/AuthModalContext";
import RedirectContext from "../context/RedirectContext";

const EmailVerified = () => {
  const { modalVisibility, setModalVisibility, } = useContext(AuthModalContext);
  const { setRedirect } = useContext(RedirectContext);
 
  return (
    // <div className="email-verified">
    //   ehbv
    // </div>
    <div className="forgot-page" >
      <div className="forgot-sub">

        <div className="text-and-div">
          <p
            onClick={() => {
              // setForgotStage("");
            }}
          >
           Email verified successfully
          </p>
        
            <button onClick={()=>{setModalVisibility(true); setRedirect("/")}}  className="verify-otp">Login</button>
      
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
