import CommunityPopUp from "./CommunityPopUp";
import OutsideClickHandler from "react-outside-click-handler";
import CommunityContext from "../context/CommunityContext";
import { useContext } from "react";
const CommunityFormModal = () => {
  const { showCommunity, setShowCommunity } = useContext(CommunityContext);


  if (!showCommunity) {
    return null;
  }
  return (
    <div className={showCommunity ? "community-page" : "hide-community-page"}>
      <OutsideClickHandler onOutsideClick={() => setShowCommunity(false)}>
        <CommunityPopUp closeModal={()=>setShowCommunity(false)} />
      </OutsideClickHandler>
    </div>
  );
};

export default CommunityFormModal;
