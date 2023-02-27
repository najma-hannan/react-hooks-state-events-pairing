import React from "react";
import VoteButtons from "./VoteButtons";

function Header({title, views, uploadDate, upvotes, downvotes, onVideoUpvote, onVideoDownvote}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{views} views | Uploaded {uploadDate}</p>
      <VoteButtons 
      upvotes={upvotes} 
      downvotes={downvotes} 
      onVideoUpvote={onVideoUpvote}
      onVideoDownvote={onVideoDownvote} />
    </div>
  )
}

export default Header