import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [wrongPassState, setWrongPassState] = useState(false)



  return (
    <UserContext.Provider value={{ user, setUser, wrongPassState, setWrongPassState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext