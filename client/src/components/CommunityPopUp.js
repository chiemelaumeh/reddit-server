import Input from "./Input";

const CommunityPopUp = ({closeModal}) => {
  return (
    <div className="community-sub">
      <h1>Create a Subreddit </h1>

      <Input placeholder={"Name"} />
      <Input placeholder={"Slogan"} />
      <Input placeholder={"Avatar"} />
      <Input placeholder={"Cover"} />
      <div className="post-btns">

      <button onClick={closeModal} className="post-form-btn-close ">Cancel</button>
      <button className="post-form-btn btn">Create subreditt!</button>
      {/* <button className="post-form-btn "> Create your Subreddit!</button> */}
      </div>
    </div>
  );
};

export default CommunityPopUp;
