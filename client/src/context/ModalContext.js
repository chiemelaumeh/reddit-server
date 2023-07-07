import { useState, createContext } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState("login");
  const [forgotStage, setForgotStage] = useState("");
  const [otp, setOtp] = useState(null)
  const [userEmail, setUserEmail] = useState("")
  const [errorStatus, setErrorStatus] = useState("")
  const [authReg, setAuthReg] = useState("")
  return (
    <ModalContext.Provider value={{ modalType, setModalType, forgotStage, setForgotStage, otp, setOtp, userEmail, setUserEmail, errorStatus, setErrorStatus, authReg, setAuthReg }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext