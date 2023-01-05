import { createContext, useState } from "react";

const UserContext = createContext({});

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState("ref");

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

export default UserContext