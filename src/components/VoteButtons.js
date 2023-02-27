import React from "react";

function VoteButtons({ upvotes, downvotes, onVideoUpvote, onVideoDownvote }) {
	
  function handleUpvote(e) {
		onVideoUpvote(parseInt(e.target.value))
	}

  function handleDownvote(e){
    onVideoDownvote(parseInt(e.target.value))
  }

	return (
		<>
			<button name="upvotes" onClick={handleUpvote} value={upvotes}>👍 {upvotes}</button>
			<button name="downvotes" onClick={handleDownvote} value={downvotes}>👎 {downvotes}</button>
			<br />
      <br />
		</>
	);
}

export default VoteButtons;