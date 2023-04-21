import { createContext, useState } from "react";

const RedirectContext = createContext();

export const RedirectContextProvider = ({ children }) => {
  const [redirect, setRedirect] = useState(false);

  return (
    <RedirectContext.Provider value={{ redirect, setRedirect }}>
      {children}
    </RedirectContext.Provider>
  );
};

export default RedirectContext