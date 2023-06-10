import React from "react";
import TimeAgo from "timeago-react";
import { useContext } from "react";
import { BsChatLeft } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserContext from "../context/UserContext";
import RedirectContext from "../context/RedirectContext";
import RerenderContext from "../context/RerenderContext";
import Voting from "./Voting";
import AuthModalContext from "../context/AuthModalContext";
import { Link } from "react-router-dom";
import EditAndDelete from "./EditAndDelete";
import axios from "axios"
// var TimeAgo = require('timeago-react');
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
  // console.log(props)
  const {
    setPostModalVisibility,
    setModalVisibility,
    lightMode,
    setLightMode,
   showEditandDelete, setShowEditandDelete,
   showOneBox, setShowOneBox, deleteModalVisibility, setDeleteModalVisibility
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  const { setRedirect } = useContext(RedirectContext);
  const { deleted, setDeleted } = useContext(RerenderContext)
  const theLightMode = lightMode ? "post-icon-light" : "post-icon";



   const deleteOnePost = async() => {
     
     try {
       // console.log("url")
       const response = await axios.delete(`http://localhost:4000/delete/${props.id}`)
      //  console.log(`http://localhost:4000/delete/${props.id}`)
      // console.log(response)
      setDeleted(response.data)
      
    } catch (error) {
      console.error(error.message)
    }
   }


  const navigateToCommunity = () => {
    setRedirect(`/r/` + props.chosenCommunity);
  };

  const handleShowDelete = () => {
    if (!showEditandDelete) {
      setShowEditandDelete(true)
    } else {
      setShowEditandDelete(false)
    }
  }

  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
      setPostModalVisibility(true);
    }
  };



  return (
    <div >
    
      <div>
        {/* {

          <EditAndDelete />

        } */}
        <div className="text-dots">
          <h5>
            {" "}
            Posted by {props.author}, in{" "}
            <p onClick={navigateToCommunity} className="community-text">
              {" "}
              r/{props.chosenCommunity}
            </p>{" "}
            - <TimeAgo datetime={props.postedAt} />{" "}
          </h5>
          <div className="edit-delete-div">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn" id={props.id} onClick={setDeleteModalVisibility(true)}>Delete</button>
          </div>
          {/* {user.username && */}
          <BsThreeDotsVertical className="dots"  id={props.author} onClick={(e)=>{setShowOneBox(e.target.id);handleShowDelete()}} />
          {/* } */}
        </div>
        <h2>{props.title}</h2>
        <div>{props.body}</div>
      </div>
      <div className="vote-reply">
        <Voting props={props} />
        <Link
          to={"/comments/" + (props.rootId || props._id)}
          state={{ commentId: props.rootId || props._id }}
        >
          <FaRegCommentDots onClick={popUpModal} className={theLightMode}  />
        </Link>

        <FaShare className={theLightMode} />
      </div>

    </div>
  );
};

export default PostContent;
