import { useState, createContext } from "react";

const AuthModalContext = createContext();
export const AuthModalProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <AuthModalContext.Provider value={{ modalVisibility, setModalVisibility}}>
      {children}
    </AuthModalContext.Provider>
  );
};
export default AuthModalContext;
