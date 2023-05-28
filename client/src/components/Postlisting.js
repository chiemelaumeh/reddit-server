import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Redditmain from "./Post";
import RerenderContext from "../context/RerenderContext";

const Postlisting = () => {
  const [comments, setComments] = useState([]);
  const { newPosts } = useContext(RerenderContext);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get("http://localhost:4000/comments/", {
        withCredentials: true,
      });

      setComments(response.data);
    };
    getComments();
  }, [newPosts]);

  return (
    <div className="app-reddit-story">
      {comments.map((comment) => (
        <Redditmain {...comment} key={comment._id} />
      ))}
    </div>
  );
};


export default Postlisting;


