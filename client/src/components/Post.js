import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import PostContent from "./postContent";


const Redditmain = (props) => {
  const { setPostModalVisibility,lightMode,setLightMode } = useContext(AuthModalContext);
  const theLightMode = lightMode ? "reddit-story-light" : "reddit-story"
  return (
    <>
      <div className="main-story">
        {/* {props.open && <PostContent />} */}

        {/* {!props.open && */}
        <Link
          // to={"/comments/" + (props.rootId || props._id)}
          // state={{ commentId: props.rootId || props._id }}
          className= {theLightMode}
          // onClick={() => setPostModalVisibility(true)}
        >
          <PostContent {...props} />
        </Link>
        {/* } */}
      </div>
    </>
  );
};

export default Redditmain;
