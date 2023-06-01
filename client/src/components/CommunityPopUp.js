import { useState } from "react";
import Input from "./Input";

const CommunityPopUp = ({closeModal}) => {

  const [name, setName] = useState("") 
  const [slogan, setSlogan] = useState("") 
  const [avatar, setAvatar] = useState("") 
  const [cover, setCover] = useState("") 
  return (
    <div className="community-sub">
      <h1>Create a Subreddit </h1>

      <Input 
      onChange={e=> setName(e.target.value)}
      value = {name}
      placeholder={"Name"} />
      <Input
      onChange={e=> setSlogan(e.target.value)}
      
       value = {slogan}
       placeholder={"Slogan"} />
      <Input
      onChange={e=> setAvatar(e.target.value)}

       value = {avatar} 
      placeholder={"Avatar"} />
      <Input
      onChange={e=> setCover(e.target.value)}

       value = {cover}
       placeholder={"Cover"} />
      <div className="post-btns">

      <button onClick={closeModal} className="post-form-btn-close ">Cancel</button>
      <button className="post-form-btn btn">Create subreditt!</button>
      {/* <button className="post-form-btn "> Create your Subreddit!</button> */}
      </div>
    </div>
  );
};

export default CommunityPopUp;
