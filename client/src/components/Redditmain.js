const Redditmain = (props) => {
  return (
    <>
      <div className="main-story">
        <div className="reddit-story">
          <h5> Posted by u/{props.author}, posted at: {props.postedAt} </h5>
          <h2>{props.title}</h2>
          <div>
            {props.body}
              
          </div>
        </div>
      </div>
    </>
  );
};

export default Redditmain;
