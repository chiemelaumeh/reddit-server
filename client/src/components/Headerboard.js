import { useContext } from "react";
import avatar from "../images/avatar.jpg";
import AuthModalContext from "../context/AuthModalContext";

import CommunityContext from "../context/CommunityContext";
const Headerboard = () => {
  const {lightMode, setlightMode} = useContext(AuthModalContext)
  const { chosenCommunity, ...communityInfo } = useContext(CommunityContext);
  const { name, slogan, avatar, cover } = communityInfo;

  const theLightMode = lightMode ? "sub-main-light" : "sub-main"
  const theLightModeTexts = lightMode ? "header-texts-light" : "header-texts"
  const theLightModeTitle = lightMode ? "header-title-light" : "header-title"

  
  if (!communityInfo.name) {
    return
    // (
    // <div className="below-header" style={{backgroundImage: `url("https://w0.peakpx.com/wallpaper/100/43/HD-wallpaper-day-landscape-digital-art-artist-artwork-digital-art-deviantart.jpg")`}}> </div>
    // )
  }
  return (
    <>
      <div
        className="below-header"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className={theLightMode}>
        <div className="com-div">
          <img className="com-icon" src={avatar} alt="" />
        </div>
        <div className={theLightModeTexts}>
          <h1 className={theLightModeTitle}>
            {name} : {slogan}
          </h1>
          <h5  className="header-board">r/{communityInfo.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Headerboard;
