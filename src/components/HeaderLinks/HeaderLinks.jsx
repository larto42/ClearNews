import React from "react";
import SocialIcons from "./SocialIcons";
import LinkList from "../shared/LinkList";

export default function HeaderLinks({ links }) {
	return (
		<nav className="header-links-wrapper">
			<LinkList links={links} />
			<SocialIcons />
		</nav>
	);
}
