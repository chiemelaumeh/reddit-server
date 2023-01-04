import { useState, createContext } from "react";

const ModalContext = createContext();
export const ModalContextProvider = ({ children }) => {
  const [modalType, setModalType] = useState("login");

  return (
    <ModalContext.Provider value={{ modalType, setModalType }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContext