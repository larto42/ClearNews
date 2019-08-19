import React from "react";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

export default function ArticleTile({ article }) {
	const { img, imgAlt, title, author, commentsAmount, date } = article;
	return (
		<article className="article">
			<div className="article__image-wrapper">
				<img className="article__image" src={img} alt={imgAlt} />
			</div>
			<h3 className="article__title">{title}</h3>
			<ArticleInfo
				className="article__info"
				author={author}
				date={date}
				commentsAmount={commentsAmount}
			/>
		</article>
	);
}
