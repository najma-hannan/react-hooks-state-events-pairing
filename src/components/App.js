
import React, { useState } from "react";
import video from "../data/video.js";
import VideoFrame from "./VideoFrame";
import Header from "./Header";
import CommentList from "./CommentList";

function App() {
	const [upvotes, setUpvote] = useState(video.upvotes);
	const [downvotes, setDownvote] = useState(video.downvotes);

	function onVideoUpvote(currentUpvotes) {
		setUpvote((currentUpvotes) => currentUpvotes + 1);
	}

	function onVideoDownvote(currentDownvotes) {
		setDownvote((currentDownvotes) => currentDownvotes + 1);
	}

	return (
		<div className="App">
			<VideoFrame title={video.title} embedUrl={video.embedUrl} />
			<Header 
      title={video.title} 
      views={video.views} 
      uploadDate={video.createdAt} 
      upvotes={upvotes} 
      downvotes={downvotes} 
      onVideoUpvote={onVideoUpvote} 
      onVideoDownvote={onVideoDownvote} />
			<CommentList comments={video.comments} />
		</div>
	);
}

export default App;
