import { createContext, useState } from "react";

const RedirectContext = createContext();

export const RedirectContextProvider = ({ children }) => {
  const [redirect, setRedirect, ] = useState(false);
  const [showHeader, setShowHeader] = useState(false)

  return (
    <RedirectContext.Provider value={{ redirect, setRedirect, showHeader, setShowHeader }}>
      {children}
    </RedirectContext.Provider>
  );
};

export default RedirectContext