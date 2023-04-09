import React from "react";
import { useContext, useState, useEffect } from "react";
import AuthModalContext from "../context/AuthModalContext";
import RootCommentContext from "../context/RootCommentContext";
import PostCommentForm from "./PostCommentForm";
import ModalContent from "./ModalContent";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";
import Comments from "./Comments";

const Postmodal = (props) => {
  const { postModalVisibility, setPostModalVisibility } =
    useContext(AuthModalContext);
  const [modalComment, setModalComment] = useState({});
  const [postComments, setPostComments] = useState([]);



  const getPostComments = async() =>{
    try {
      const response = await axios.get(
        `http://localhost:4000/comments/root/${props.id}`,
        { withCredentials: true }
      );

      setPostComments(response.data);

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    const getModalComment = async () => {
      try {
        const response = await axios.get(
          // `https://redditt-api.onrender.com/comments/${props.id}`,
          `http://localhost:4000/comments/${props.id}`,
          {
            withCredentials: true,
          }
        );

        setModalComment(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getModalComment();

    getPostComments();
  }, [props.id]);

  function reset() {
    setPostModalVisibility(false);
  }
  return (
    // <OutsideClickHandler onOutsideClick={() => setModalVisibility(false)}>
    // </OutsideClickHandler>
    <div
      className={
        postModalVisibility ? "post-modal-page" : "hide-post-modal-page"
      }
    >
      <OutsideClickHandler onOutsideClick={reset}>
        <div className="post-sub">
          <ModalContent open={true} {...modalComment} />
          {!!modalComment && !!modalComment._id && (
            <>
              <hr />
              <PostCommentForm
                postComments={postComments}
                title={modalComment.title}
                rootId={modalComment._id}
                parentId={modalComment._id}
                showAuthor={true}
                showButton={false}
              />
              <hr />

               <RootCommentContext.Provider value={{getPostComments}} >

                <Comments
                  rootId={modalComment._id}

                  parentId={modalComment._id}
                  postComments={postComments}
                />
               </RootCommentContext.Provider>
    
            </>
          )}
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Postmodal;
