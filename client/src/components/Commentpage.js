import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Commentpage = () => {
  const [comment, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comments/${id}`, {
          withCredentials: true,
        });
        setComment(response.data)
        console.log(comment);
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, []);

  return <div>Comment page: {id}</div>;
};

export default Commentpage;
