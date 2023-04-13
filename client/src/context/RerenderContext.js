import { useState, createContext } from "react";

const RerenderContext = createContext();
export const RerenderContextProvider = ({ children }) => {
  const [newPosts, setNewPosts] = useState({});
  const [newComments, setNewComments] = useState({});

  return (
    <RerenderContext.Provider
      value={{ newPosts, setNewPosts, newComments, setNewComments }}
    >
      {children}
    </RerenderContext.Provider>
  );
};

export default RerenderContext;
