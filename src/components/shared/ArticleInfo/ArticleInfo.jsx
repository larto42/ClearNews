import React from "react";

export default function ArticleInfo(props) {
	const { addedClass, author, commentsAmount, date } = props;
	return (
		<div className={`${addedClass} info`}>
			<span className="info__author">By {author}</span>
			<span className="info__comments">{commentsAmount} comments</span>
			<span className="info__date">{date}</span>
		</div>
	);
}
