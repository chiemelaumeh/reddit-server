import { useParams } from "react-router-dom";
import Headerboard from "./Headerboard";
import Postform from "./Postform";
import Postlisting from "./Postlisting";
import { useContext } from "react";
import CommunityContext from "../context/CommunityContext";
import AuthModalContext from "../context/AuthModalContext";
import ImageComponent from "./ImageComponent";
const Board = () => {
  const {communityFromUrl} = useParams();
  const {setChosenCommunity} = useContext(CommunityContext);
  const {postModalVisibility, postFormModalVisibility, openUpload,} = useContext(AuthModalContext)
  const fixedVisibilty = postModalVisibility || postFormModalVisibility || openUpload ? "main-reddit-div-fixed" : "main-reddit-div"
 
    !communityFromUrl ? setChosenCommunity(null) :  setChosenCommunity(communityFromUrl);
    
  
  return (
    <div className={fixedVisibilty}>
      <Headerboard />
      <Postform />
      <Postlisting />
  
    </div>
  );
};

export default Board;
