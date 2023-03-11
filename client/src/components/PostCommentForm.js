import React from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const PostCommentForm = () => {

  const {user, setUser} = useContext(UserContext)
  return (
    <div>
      {user.username &&

      <div>{user.username}</div>
      }
      <form>
        
      </form>
    </div>
  );
};

export default PostCommentForm;
