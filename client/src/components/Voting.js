import React from 'react'
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";

const Voting = () => {
  return (
    <div className='voting-div'>
      <BiUpvote className='vote-icon'/>

      <span className='vote-icon-number'>6</span>
      <BiDownvote className='vote-icon' />
    </div>
  )
}

export default Voting