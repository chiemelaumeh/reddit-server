import React, { useEffect } from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";

const Voting = (props) => {
  const [voteState, setVoteState] = useState(0)
  
  //  console.log(props.singleComment._id)
  useEffect(() => {
    const refreshVotes = async () => { 
      const url = `http://localhost:4000/votes/${props.singleComment._id}/`
        try {
          const response = await axios.get(url, );
          console.log(response)
          setVoteState(response.data)
        } catch (error) {
          console.error(error.message)
        }
      console.log("me")
      };
      refreshVotes()
  },[props.singleComment._id])
  const sendVote = async (direction) => { 
  const url = `http://localhost:4000/vote/${props.singleComment._id}/${direction}`
    try {
      const response = await axios.get(url, {
        withCredentials: true,
      });
    

        setVoteState(response.data)
     
    } catch (error) {
      console.error(error.message)
    }
  };

  const handleVoteUp = () => {
    sendVote("up")

  };
  const handleVoteDown = () => {
    if (voteState === 0) 
    return
    sendVote("down")
  };

  return (
    <div className="voting-div">
      <BiUpvote className="vote-icon" onClick={handleVoteUp} />

      <span className="vote-icon-number">{voteState}</span>
      <BiDownvote className="vote-icon" onClick={handleVoteDown} />
    </div>
  );
};

export default Voting;
