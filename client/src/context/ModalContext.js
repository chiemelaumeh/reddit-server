import { useState, createContext } from "react";

const ModalContext = createContext();
export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState("login");

  return (
    <ModalContext.Provider value={{ modalType, setModalType }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext