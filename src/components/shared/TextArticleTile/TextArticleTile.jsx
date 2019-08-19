import React from "react";
import ArticleInfo from "../ArticleInfo/ArticleInfo";

export default function TextArticleTile(props) {
	const { title, text, author, commentsAmount, date } = props.article;
	return (
		<article className="text-article">
			<h3 className="text-article__title">{title}</h3>
			<p className="text-article__text">{text}</p>
			<ArticleInfo
				className="text-article__info"
				author={author}
				date={date}
				commentsAmount={commentsAmount}
			/>
		</article>
	);
}
