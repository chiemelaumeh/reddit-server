import React from "react";
import TimeAgo from "timeago-react";
import { useContext } from "react";
import { BsChatLeft } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import UserContext from "../context/UserContext";
import RedirectContext from "../context/RedirectContext";
import Voting from "./Voting";
import AuthModalContext from "../context/AuthModalContext";
import { Link } from "react-router-dom";


// var TimeAgo = require('timeago-react');
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
  const { setPostModalVisibility, setModalVisibility, lightMode,setLightMode } = useContext(AuthModalContext);
  const { user} = useContext(UserContext);
  const { setRedirect } = useContext(RedirectContext);
  const theLightMode = lightMode ? "post-icon-light" : "post-icon"

  const navigateToCommunity = () => {
    setRedirect(`/r/` + props.chosenCommunity);

    // const chosen = (e) => {
    //  const chosenId = e.target.id
    //  console.log(chosenId)
    // }
  };

  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } 
    else {
      setPostModalVisibility(true);
    }
  };
  return (
    <div>
      <div>
        <h5>
          {" "}
          Posted by {props.author}, in{" "}
          <p onClick={navigateToCommunity} className="community-text">
            {" "}
            r/{props.chosenCommunity}
          </p>{" "}
          - <TimeAgo datetime={props.postedAt} />{" "}
        </h5>
        <h2>{props.title}</h2>
        <div>{props.body}</div>
      </div>
      <div className="vote-reply">
      <Voting props={props} />
    <Link 
        to={"/comments/" + (props.rootId || props._id)}
        state={{ commentId: props.rootId || props._id }}
    >
    
    
      <FaRegCommentDots
        onClick={popUpModal}
        className={theLightMode}
      />
    
    </Link>


      <FaShare
     
        className={theLightMode}
      />

      </div>
    </div>
  );
};

export default PostContent;
