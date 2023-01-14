import { useState, useEffect } from "react";
import axios from "axios"
import Redditmain from "./Redditmain";


const Postlisting = () => {
  const [comments, setComments] = useState([]);


  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get("http://localhost:4000/comments", {
        withCredentials: true,
      });
      // console.log(response.data)
      setComments(response.data);
    };
    getComments();
  }, []);
  
  return (
    <div className="app-reddit-story">
      {comments.map((comment) => (
        <Redditmain {...comment} />
      ))}
    </div>
  );
};

export default Postlisting;
