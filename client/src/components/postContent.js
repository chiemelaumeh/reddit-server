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
import axios from "axios";
import Headerbuttons from "./Headerbuttons";
import Input from "./Input";
import OutsideClickHandler from "react-outside-click-handler";
import ModalContext from "../context/ModalContext";
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
  const postComments = [props];
  console.log(postComments);
  const {
    setPostModalVisibility,
    setModalVisibility,
    lightMode,
    setLightMode,
    showEditandDelete,
    setShowEditandDelete,
    showOneBox,
    setShowOneBox,
    deleteModalVisibility,
    setDeleteModalVisibility,
    confirmDeleteVisibility,
    setConfirmDeleteVisibility,
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  const { setRedirect } = useContext(RedirectContext);
  const { deleted, setDeleted, allProps, setAllProps } =
    useContext(RerenderContext);
  const theLightMode = lightMode ? "post-icon-light" : "post-icon";
  const deleteOnePost = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/delete/${props.id}`
      );
      setDeleted(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigateToCommunity = () => {
    setRedirect(`/r/` + props.chosenCommunity);
  };


  const popUpModal = () => {
    if (!user.username) {
      setModalVisibility(true);
    } else {
      setPostModalVisibility(true);
    }
  };

  return (
    <div>
      {postComments.map((singleComment, index) => {
        return (
          <div key={index}>
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

              {singleComment._id === showEditandDelete && (
                <div id={props._id} className="edit-delete-div">
                  {!confirmDeleteVisibility && (
                    <button className="edit-btn">Edit</button>
                  )}
                  {confirmDeleteVisibility && (
                    <button
                      id={props.id}
                      onClick={() => {
                        deleteOnePost();
                        setShowEditandDelete(false);
                      }}
                      className="delete-btn"
                    >
                      {" "}
                      Delete
                    </button>
                  )}
                  <button
                    className={
                      !deleteModalVisibility ? "delete-btn" : "hide-delete-btn"
                    }
                    id={props.id}
                    onClick={() => {
                      setDeleteModalVisibility(true);
                      setConfirmDeleteVisibility(true);
                    }}
                  >
                    Delete
                  </button>
                  {deleteModalVisibility && (
                    <button className="edit-btn">Cancel</button>
                  )}
                </div>
              )}
              {/* </div> */}

              {singleComment.author === user.username && (
                <BsThreeDotsVertical
                  className="dots"
                  id={props._id}
                  onClick={() => {
                    if (!showEditandDelete) {
                      setShowEditandDelete(singleComment._id);
                    } else {
                      setShowEditandDelete(false);
                    }
                    // handleShowDelete();
                    setConfirmDeleteVisibility(false);
                    setDeleteModalVisibility(false);
                  }}
                />
              )}
            </div>
            <h2>{singleComment.title}</h2>
            <div>{props.body}</div>
          </div>
        );
      })}
        <div className="vote-reply">
          <Voting props={props} />
          <Link
            to={"/comments/" + (props.rootId || props._id)}
            state={{ commentId: props.rootId || props._id }}
          >
            <FaRegCommentDots onClick={popUpModal} className={theLightMode} />
          </Link>
          <FaShare className={theLightMode} />
        </div>
    </div>
  );
};

export default PostContent;
