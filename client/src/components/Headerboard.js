import { useContext } from "react";
import avatar from "../images/avatar.jpg";

import CommunityContext from "../context/CommunityContext";
const Headerboard = () => {
  const { chosenCommunity, ...communityInfo } = useContext(CommunityContext);
  // const cover = chosenCommunity.cover
  const { name, slogan, avatar, cover } = communityInfo;

  if (!communityInfo.name) {
    return(
    <div className="below-header" style={{backgroundImage: `url("https://w0.peakpx.com/wallpaper/100/43/HD-wallpaper-day-landscape-digital-art-artist-artwork-digital-art-deviantart.jpg")`}}> </div>
    )
  }

  return (
    <>
      <div
        className="below-header"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>
      <div className="sub-main">
        <div className="com-div">
          <img className="com-icon" src={avatar} alt="" />
        </div>
        <div className="header-texts">
          <h1 className="header-title">
            {name} : {slogan}
          </h1>
          <h5 className="header-board">r/{communityInfo.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Headerboard;
