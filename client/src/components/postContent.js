import React, { useState } from "react";
import TimeAgo from "timeago-react";
import { useContext } from "react";
import { FaShare } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserContext from "../context/UserContext";
import RedirectContext from "../context/RedirectContext";
import RerenderContext from "../context/RerenderContext";
import Voting from "./Voting";
import AuthModalContext from "../context/AuthModalContext";
import { Link } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";

import {
  FacebookIcon, WhatsappIcon
}
from "react-share"
import axios from "axios";
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
  const postComments = [props];
  const [shareBox, setSharebox] = useState("")

  const {
    setPostModalVisibility,
    setModalVisibility,
    lightMode,
    showEditandDelete,
    setShowEditandDelete,
    deleteModalVisibility,
    setDeleteModalVisibility,
    confirmDeleteVisibility,
    setConfirmDeleteVisibility,
  } = useContext(AuthModalContext);
  const { user } = useContext(UserContext);
  const { setRedirect, showHeader, setShowHeader } = useContext(RedirectContext);
  const { setDeleted } = useContext(RerenderContext);


  const theLightMode = lightMode ? "post-icon-light" : "post-icon";
  const deleteOnePost = async () => {
    try {
      const response = await axios.delete(`/delete/${props.id}`);
      setDeleted(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const navigateToCommunity = () => {
    setRedirect(`/r/` + props.chosenCommunity);
    setShowHeader(true)
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
              <div className="posted-by-h5">
                {" "}
                Posted by {props.author}, in{" "}
                <p onClick={navigateToCommunity} className="community-text">
                  {" "}
                  r/{props.chosenCommunity}
                </p>{" "}
                - <TimeAgo datetime={props.postedAt} />{" "}
              </div>

              {singleComment._id === showEditandDelete && (
                <div id={props._id} className="edit-delete-div">
                  {!confirmDeleteVisibility && (
                    <button
                      onClick={() => {
                        setShowEditandDelete(false);
                      }}
                      className="edit-btn"
                    >
                      Cancel
                    </button>
                  )}
                  {confirmDeleteVisibility && (
                    <button
                      id={props.id}
                      onClick={() => {
                        deleteOnePost();
                        setShowEditandDelete(false);
                      }}
                      className="confirm-delete-btn"
                    >
                      {" "}
                      Yes, Delete
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
                    <button
                      onClick={() => {
                        setShowEditandDelete(false);
                      }}
                      className="edit-btn"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              )}

              {singleComment.author === user.username && !showEditandDelete && (
                <BsThreeDotsVertical
                  className="dots"
                  id={props._id}
                  onClick={() => {
                    if (!showEditandDelete) {
                      setShowEditandDelete(singleComment._id);
                    } else {
                      setShowEditandDelete(false);
                    }
                    setConfirmDeleteVisibility(false);
                    setDeleteModalVisibility(false);
                  }}
                />
              )}
            </div>
            <h2>{singleComment.title}</h2>
            <div className="post-text">{props.body}</div>
          </div>
        );
      })}
      <div className="vote-reply">
        <Voting props={props} />
        <Link
          // to={"/comments/" + (props.rootId || props._id)}
          state={{ commentId: props.rootId || props._id }}
        >
          <FaRegCommentDots onClick={popUpModal} className={theLightMode} />
        </Link>
        {/* {
          shareBox   &&(

          <div className="share-box">
      
            <FacebookShareButton
              url={`http://myreddit-api.onrender.com/comments/${props._id}`}
            >
              
              <FacebookIcon></FacebookIcon>
            </FacebookShareButton>
          </div>
          )

        }
        <FaShare onClick={()=>{setSharebox(!shareBox)}} className={theLightMode} /> */}
      </div>
    </div>
  );
};

export default PostContent;
