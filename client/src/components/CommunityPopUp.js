import { useState, useContext } from "react";
import CommunityContext from "../context/CommunityContext";
import OutsideClickHandler from "react-outside-click-handler";

const CommunityPopUp = () => {

  const { showCommunity, setShowCommunity } = useContext(CommunityContext);

  if (!showCommunity) {
    return null;
  }
  return (
    <div className={showCommunity ? "community-page" : "hide-community-page"}>
    <OutsideClickHandler onOutsideClick={() => setShowCommunity(false)}>
      <div className="community-sub">
        <h1>Create a Community</h1>
        NICE
      </div>
    </OutsideClickHandler>
  </div>
  )
}

export default CommunityPopUp