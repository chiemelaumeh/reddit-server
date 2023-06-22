import { useState, createContext } from "react";

const RerenderContext = createContext();
export const RerenderContextProvider = ({ children }) => {
  const [newPosts, setNewPosts] = useState({});
  const [newComments, setNewComments] = useState({});
  const [errorPage, setErrorPage ] = useState(false);
  const [deleted, setDeleted] = useState(null)
  const [allProps, setAllProps] = useState ([])
  const [tokenExist, setTokenExists] = useState(false)

  return (
    <RerenderContext.Provider
      value={{ newPosts, setNewPosts, newComments, setNewComments, errorPage, setErrorPage, deleted, setDeleted, allProps, setAllProps, tokenExist, setTokenExists  }}
    >
      {children}
    </RerenderContext.Provider>
  );
};

export default RerenderContext;


