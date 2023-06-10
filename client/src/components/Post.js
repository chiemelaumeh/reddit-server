import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import PostContent from "./postContent";
import EditAndDelete from "./EditAndDelete";


const Redditmain = (props) => {
  // console.log(props)
  const { setPostModalVisibility,lightMode,setLightMode } = useContext(AuthModalContext);
  const theLightMode = lightMode ? "reddit-story-light" : "reddit-story"
  return (
    <>
      <div id={props._id}  className="main-story">
        {/* {props.open && <PostContent />} */}

        {/* {!props.open && */}
        <div  id={props._id} 
          // to={"/comments/" + (props.rootId || props._id)}
          // state={{ commentId: props.rootId || props._id }}
          className= {theLightMode}
          // onClick={() => setPostModalVisibility(true)}
        >
          {/* <EditAndDelete {...props} /> */}
          <PostContent {...props}  id={props._id} onClick={(e)=> {console.log(e.target.id)}}  />
        </div>
        {/* } */}
      </div>
    </>
  );
};

export default Redditmain;
