import { useState, createContext } from "react";

const RerenderContext = createContext();
export const RerenderContextProvider = ({ children }) => {
  const [newPosts, setNewPosts] = useState({});
  const [newComments, setNewComments] = useState({});
  const [errorPage, setErrorPage ] = useState(false);

  return (
    <RerenderContext.Provider
      value={{ newPosts, setNewPosts, newComments, setNewComments, errorPage, setErrorPage  }}
    >
      {children}
    </RerenderContext.Provider>
  );
};

export default RerenderContext;


