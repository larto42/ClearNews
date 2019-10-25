import React, { Component } from "react";
import LinkList from "../shared/LinkList";
import * as Routes from "../../config/routes";

export default class Menu extends Component {
	state = {
		links: [
			{
				name: "Home",
				link: "/"
			},
			{
				name: "Culture",
				link: Routes.CATEGORY + "/culture"
			},
			{
				name: "Entertainment",
				link: Routes.CATEGORY + "/entertainment"
			},
			{
				name: "Politics",
				link: "#"
			},
			{
				name: "Sports",
				link: "#"
			},
			{
				name: "Worldwide",
				link: "#"
			},
			{
				name: "Innovation",
				link: "#"
			},
			{
				name: "Education",
				link: "#"
			}
		],
		activeSite: "Home"
	};

	setActiveSite = name => {
		this.setState({ activeSite: name });
	};

	render() {
		const { links, activeSite } = this.state;
		return (
			<nav className="menu-wrapper">
				<LinkList
					links={links}
					activeSite={activeSite}
					setActiveSite={this.setActiveSite}
				/>
			</nav>
		);
	}
}
