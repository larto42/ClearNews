import React from "react";

export default function ArticleTile({ article }) {
	const { img, imgAlt, title, author, commentsAmount, date } = article;
	return (
		<article className="article">
			<div className="article__image-wrapper">
				<img className="article__image" src={img} alt={imgAlt} />
			</div>
			<div className="article__title">{title}</div>
			<div className="article__info info">
				<span className="info__author">By {author}</span>
				<span className="info__comments">{commentsAmount} comments</span>
				<span className="info__date">{date}</span>
			</div>
		</article>
	);
}
