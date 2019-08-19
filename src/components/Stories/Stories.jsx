import React, { Component } from "react";
import ArticleTile from "../shared/ArticleTile/ArticleTile";
import { withFirebase } from "../../utils/Firebase";

class Stories extends Component {
	state = {
		articles: {}
	};

	componentDidMount() {
		this.props.firebase.getArticles(this.props.number).on("value", snapshot => {
			this.setState({
				articles: snapshot.val()
			});
		});
	}

	handleClick = () => {
		this.props.firebase.addArticle({
			img: "https://source.unsplash.com/random/?telephone",
			imgAlt: "img alt4",
			title: "Tytuł artykułu dodanego z kodu!",
			author: "React Firebase",
			commentsAmount: 11,
			date: "16 Jan 2013"
		});
	};

	render() {
		const { articles } = this.state;
		return (
			<div className={this.props.className}>
				{articles &&
					Object.values(articles).map((item, index) => (
						<ArticleTile key={index} article={item} />
					))}
				{/* <button onClick={this.handleClick}>Add Item</button> */}
			</div>
		);
	}
}

export default withFirebase(Stories);
