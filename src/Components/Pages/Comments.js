import React from "react";
import TopCommentsBox from "../CommentsBox/TopCommentsBox/TopCommentsBox";
import MessageScroll from "../MessageScroll.js";
const Comments = () => {
  return (
    <div>
      <TopCommentsBox autoFocus={false} />
      <MessageScroll />
    </div>
  );
};

export default Comments;
