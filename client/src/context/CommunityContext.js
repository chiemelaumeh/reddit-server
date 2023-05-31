import { createContext, useState } from "react";

const CommunityContext = createContext();
export const CommunityContextProvider = ({ children }) => {
  const [showCommunity, setShowCommunity] = useState(false);
  return (
    <CommunityContext.Provider value={{ showCommunity, setShowCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityContext;
