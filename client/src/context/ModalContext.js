import { useState, createContext } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState("login");
  const [forgotStage, setForgotStage] = useState("");
  const [otp, setOtp] = useState(null)
  const [userEmail, setUserEmail] = useState("")

  return (
    <ModalContext.Provider value={{ modalType, setModalType, forgotStage, setForgotStage, otp, setOtp, userEmail, setUserEmail }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext