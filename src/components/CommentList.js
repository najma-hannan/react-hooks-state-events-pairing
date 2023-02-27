import React, {useState} from "react";
import Comment from "./Comment";

function CommentList({ comments }) {

  const [showComments, setShowComments] = useState(true)

  function handleShowComments(){
    setShowComments(showComments => !showComments)
  }

  const appClass = showComments ? "" : "hidden"


	return (
		<div className="commentList">
			<button onClick={handleShowComments}>{showComments ? "Hide" : "Show"} Comments</button>
			<hr />
			<div className={appClass}>
				<h3>{comments.length} Comments</h3>
				{comments.map((comment) => (
					<Comment key={comment.id} user={comment.user} comment={comment.comment} />
				))}
			</div>
		</div>
	);
}

export default CommentList;
