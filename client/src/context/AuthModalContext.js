import { useState, createContext } from "react";

const AuthModalContext = createContext();
export const AuthModalProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [postModaVisibility, setPostModalVisibility] = useState(false)
  return (
    <AuthModalContext.Provider value={{ modalVisibility, setModalVisibility,postModaVisibility, setPostModalVisibility}}>
      {children}
    </AuthModalContext.Provider>
  );
};
export default AuthModalContext;
