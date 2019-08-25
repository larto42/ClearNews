import React from "react";
import LinkList from "../shared/LinkList";
import * as Routes from "../../config/routes";
export default function Menu() {
	const links = [
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
	];

	return (
		<nav className="menu-wrapper">
			<LinkList links={links} />
		</nav>
	);
}
