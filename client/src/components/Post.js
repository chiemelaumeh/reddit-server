import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import PostContent from "./postContent";



const Redditmain = (props) => {
  const { lightMode } = useContext(AuthModalContext);
  const theLightMode = lightMode ? "reddit-story-light" : "reddit-story"
  return (
    <>
      <div id={props._id}  className="main-story">
        <div  id={props._id} 
          className= {theLightMode}
        >
          <PostContent {...props}  id={props._id} onClick={(e)=> {console.log(e.target.id)}}  />
        </div>
      </div>
    </>
  );
};

export default Redditmain;
