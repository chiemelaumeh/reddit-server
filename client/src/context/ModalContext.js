import { useState, createContext } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState("login");
  const [forgotStage, setForgotStage] = useState("");


  return (
    <ModalContext.Provider value={{ modalType, setModalType, forgotStage, setForgotStage }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext