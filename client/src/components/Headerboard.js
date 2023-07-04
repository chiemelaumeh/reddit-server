import { useContext } from "react";
import CommunityContext from "../context/CommunityContext";
import RedirectContext from "../context/RedirectContext";
import banner from "../images/banner.png";
const Headerboard = () => {
  const { chosenCommunity, ...communityInfo } = useContext(CommunityContext);
  const { showHeader, setShowHeader } = useContext(RedirectContext);
  const { name, slogan, avatar, cover } = communityInfo;

  if (!communityInfo.name) {
    return (
      <div
      // className="below-header"

      // style={{
      //   backgroundImage: `url("https://w0.peakpx.com/wallpaper/100/43/HD-wallpaper-day-landscape-digital-art-artist-artwork-digital-art-deviantart.jpg")`,
      // }}
      ></div>
    );
  }

  return (
    <>
      {/* <div
        className="below-header"
        style={{ backgroundImage: `url(${cover})` }}
      ></div> */}
      <div className="sub-main">
        {/* <div className="com-div">
          <img className="com-icon" src={avatar} alt="" />
        </div> */}
        <div className="header-texts">
          {
            showHeader &&
            <>
              <h1 className="header-title">
                {name} : {slogan}
              </h1>
              <h5 className="header-board">r/{communityInfo.name}</h5>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Headerboard;
