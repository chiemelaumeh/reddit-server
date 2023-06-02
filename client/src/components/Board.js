import { useParams } from "react-router-dom";
import Headerboard from "./Headerboard";
import Postform from "./Postform";
import Postlisting from "./Postlisting";
import { useContext, useEffect } from "react";
import CommunityContext from "../context/CommunityContext";

const Board = () => {
  const {communityFromUrl} = useParams();
  const {chosenCommunity, setChosenCommunity} = useContext(CommunityContext);
  // console.log(communityFromUrl)
  useEffect(() => {
    setChosenCommunity(communityFromUrl);
  }, []);
  return (
    <div>
      <Headerboard />
      <Postform />
      <Postlisting />
    </div>
  );
};

export default Board;
