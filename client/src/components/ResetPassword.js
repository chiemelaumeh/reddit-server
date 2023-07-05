import { useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios"

const ResetPassword = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { forgotStage, setForgotStage, userEmail, setUserEmail } = useContext(ModalContext);
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setconfimNewPass] = useState("");

  const changePass = async(e) => {

    e.preventDefault();

    if (newPass !== confirmNewPass) {
      setErrorMessage("Passwords do not match. Try again");
      return;
    }
    // setUserEmail("engineerfranklyn@gmail.com")
    const data = {newPass, userEmail}
    
    try {
      const response = await axios.post("/change_password", data)
   
      if(response.data.passUpdated === true) {
        setForgotStage("recovered");
      }
    } catch (error) {
      console.error(error.message)
    }

  };
  // console.log(errorMessage)

  return (
    <div className={forgotStage ? "forgot-page" : "hide-auth-page"}>
      <div className="forgot-sub">
        <form className="forgot-form" onSubmit={changePass}>
          <label required>
            <div className="header-icon">
              <p className="new-pass">New Password: </p>
              <AiOutlineClose className="icon" onClickCapture={()=>{setForgotStage("")}}/>
            </div>
            <input
              // required
              className="forgot-sub-input"
              type="password"
              value={newPass}
              onChange={(e) => {
                {
                  setNewPass(e.target.value);
                  setErrorMessage("");
                }
              }}
            />
          </label>
          <label required>
            <p className="new-pass">Confirm Password: </p>
            <input
              // required
              className="forgot-sub-input"
              type="password"
              value={confirmNewPass}
              onChange={(e) => {
                {
                  setconfimNewPass(e.target.value);
                  setErrorMessage("");
                }
              }}
            />
          </label>

          <div className="otp-div">
            <button type="submit" className="verify-otp">
              {" "}
              Change Password
            </button>
          </div>
        </form>
        {errorMessage && <p className="reset-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
