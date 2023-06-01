import { createContext, useEffect, useState } from "react";
import axios from "axios";

const CommunityContext = createContext();
export const CommunityContextProvider = ({ children }) => {
  const [showCommunity, setShowCommunity] = useState(false);
  const [chosenCommunity, setChosenCommunity] = useState("");
  const [communityInfo, setCommunityInfo] = useState({});

  useEffect(() => {
    if (!chosenCommunity) {
      return ;
    }
    const getFullCommunity = async () => {
      try {
        const response = await axios.get(`/communities/${chosenCommunity}`);
        setCommunityInfo(response.data);
        // console.log(response.data);
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
