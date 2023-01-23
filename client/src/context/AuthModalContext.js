import { useState, createContext } from "react";

const AuthModalContext = createContext();
export const AuthModalProvider = ({ children }) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [postModalVisibility, setPostModalVisibility] = useState(false)
  return (
    <AuthModalContext.Provider value={{ modalVisibility, setModalVisibility,postModalVisibility, setPostModalVisibility}}>
      {children}
    </AuthModalContext.Provider>
  );
};
export default AuthModalContext;
