import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CommunityContext = createContext();
export const CommunityContextProvider = ({ children }) => {
  const [showCommunity, setShowCommunity] = useState(false);
  const [chosenCommunity, setChosenCommunity] = useState(false);
  const [communityInfo, setCommunityInfo] = useState({});

  useEffect(() => {
    const getFullCommunity = async () => {
      if (!chosenCommunity) {
        // setCommunityInfo({})
        return ;
      }
      try {
        const response = await axios.get(`/communities/${chosenCommunity}`);
        setCommunityInfo(response.data);

      } catch (error) {
        console.error(error.messaage);
      }
    };
    // console.log("maybe");
    getFullCommunity();
  }, [chosenCommunity]);
  return (
    <CommunityContext.Provider
      value={{
        showCommunity,
        setShowCommunity,
        chosenCommunity,
        setChosenCommunity,
        ...communityInfo,
      }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityContext;
