import { useContext } from "react";
import CommunityContext from "../context/CommunityContext";
const Headerboard = ({ communityFromUrl }) => {
  const { chosenCommunity,  ...communityInfo } = useContext(CommunityContext)
  
  return (
    <>
      <div className="below-header"></div>
      <div className="sub-main">
        <div className="com-div">
          <img
            className="com-icon"
            src="https://i.etsystatic.com/20162739/r/il/f0f9f3/1936656917/il_1588xN.1936656917_cubv.jpg"
            alt=""
          />
        </div>
        <div className="header-texts">
          <h1 className="header-title">{communityInfo.name} : {communityInfo.slogan}</h1>
          <h5 className="header-board">r/{communityInfo.name}</h5>
        </div>
      </div>
    </>
  );
};

export default Headerboard;
