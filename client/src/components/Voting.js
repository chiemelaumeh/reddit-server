import React from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import axios from "axios";

const Voting = (props) => {
  const sendVote = async (direction) => { 
  const url = `http://localhost:4000/vote/${props.singleComment._id}/${direction}`
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
      console.log(response)
    } catch (error) {
      console.error(error.message)
    }
  };

  const handleVoteUp = () => {
    sendVote("up")

  };
  const handleVoteDown = () => {
    sendVote("down")

  };

  return (
    <div className="voting-div">
      <BiUpvote className="vote-icon" onClick={handleVoteUp} />

      <span className="vote-icon-number">6</span>
      <BiDownvote className="vote-icon" onClick={handleVoteDown} />
    </div>
  );
};

export default Voting;
