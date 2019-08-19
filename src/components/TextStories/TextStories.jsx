import React, { Component } from "react";
import TextArticleTile from "../shared/TextArticleTile/TextArticleTile";
import { withFirebase } from "../../utils/Firebase";

class TextStories extends Component {
	state = {
		articles: {}
	};

	componentDidMount() {
		this.props.firebase
			.getTextArticles(this.props.number)
			.on("value", snapshot => {
				console.log(snapshot.val());
				this.setState({
					articles: snapshot.val()
				});
			});
	}

	render() {
		const { articles } = this.state;
		return (
			<div className={this.props.className}>
				{articles &&
					Object.values(articles).map((item, index) => (
						<TextArticleTile key={index} article={item} />
					))}
			</div>
		);
	}
}

export default withFirebase(TextStories);
