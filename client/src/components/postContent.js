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
// import { useState, useContext } from "react";
// import axios from "axios";
// import AuthModalContext from "../context/AuthModalContext";
import OutsideClickHandler from "react-outside-click-handler";
import ModalContext from "../context/ModalContext";
// import UserContext from "../context/UserContext"
// var TimeAgo = require('timeago-react');
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
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
    // editAndDeleteVisibilty, setEditAndDeleteVisibilty
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  const { setRedirect } = useContext(RedirectContext);
  const { deleted, setDeleted, allProps, setAllProps } =
    useContext(RerenderContext);
  const theLightMode = lightMode ? "post-icon-light" : "post-icon";

  // setAllProps(props)

  const deleteOnePost = async () => {
    try {
      // console.log("url")
      const response = await axios.delete(
        `http://localhost:4000/delete/${props.id}`
      );
      //  console.log(`http://localhost:4000/delete/${props.id}`)
      // console.log(response)
      setDeleted(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigateToCommunity = () => {
    setRedirect(`/r/` + props.chosenCommunity);
  };

  const handleShowDelete = () => {
    if (!showEditandDelete) {
      setShowEditandDelete(true);
    } else {
      setShowEditandDelete(false);
    }
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
      {/* <div >
        <OutsideClickHandler
          onOutsideClick={() => setDeleteModalVisibility(false)}
        >
          <div className="auth-sub">
            <h1>Delete this post?</h1>
            <button
              id={props.id}
              onClick={(e) => {
                console.log(e.target.id);
              }}
              className="delete-post-btn"
            >
              {" "}
              Delete{" "}
            </button>
            <button
              className="delete-post-btn"
              onClick={() => setDeleteModalVisibility(false)}
            >
              Cancel
            </button>
          </div>
        </OutsideClickHandler>
      </div> */}
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

          {/* 
          <div>
      {postComments.map((singleComment, index) => {
        const replies = props.postComments.filter(
          (loopedComment) => loopedComment.parentId === singleComment._id
        );
 */}

          {/* <div>
            {props.map((singlePost, index) => {
              const replies = props.postComments.filter(
                (loopedComment) => loopedComment.parentId === singlePost._id
              );
            })} */}

            {showEditandDelete && (
              <div className="edit-delete-div">
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
                  <button onClick={handleShowDelete} className="edit-btn">
                    Cancel
                  </button>
                )}
              </div>
            )}
          {/* </div> */}
          {/* props.map */}
          <BsThreeDotsVertical
            className="dots"
            id={props.id}
            onClick={(e) => {
              setShowOneBox(e.target.id);
              handleShowDelete();
              setConfirmDeleteVisibility(false);
              setDeleteModalVisibility(false);
            }}
          />
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
          <FaRegCommentDots onClick={popUpModal} className={theLightMode} />
        </Link>

        <FaShare className={theLightMode} />
      </div>
    </div>
  );
};

export default PostContent;
