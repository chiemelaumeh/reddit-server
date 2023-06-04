import React from "react";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');
<TimeAgo datetime={"2016-08-08 08:08:08"} locale="zh_CN" />;

const PostContent = (props) => {
  return (
    <div>
      <h5>
        {" "}
        Posted by {props.author}, in <p className="community-text">  r/{props.chosenCommunity}</p>  - <TimeAgo datetime={props.postedAt} />{" "}
      </h5>
      <h2>{props.title}</h2>
      <div>{props.body}</div>
    </div>
  );
};

export default PostContent;
