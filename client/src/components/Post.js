import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthModalContext from "../context/AuthModalContext";
import PostContent from "./Postcontent";

const Redditmain = (props) => {
  const { postModaVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);

  return (
    <>
      <div className="main-story">
        {/* {props.open && <PostContent />} */}

        {/* {!props.open && */}
          <Link
            to={`/comments/${props._id}`}
            state={{ commentId: props._id }}
            className={props.open ? "reddit-story-closed" : "reddit-story"}
            onClick={() => setPostModalVisibility(true)}
          >
            <PostContent {...props} />
          </Link>
        {/* } */}
      </div>
    </>
  );
};

export default Redditmain;
