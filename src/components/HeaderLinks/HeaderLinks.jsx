import React from "react";
import SocialIcons from "./SocialIcons";
import LinkList from "../shared/LinkList";
import * as Routes from "../../config/routes";

export default function HeaderLinks() {
	const links = [
		{
			name: "About",
			link: Routes.MAIN
		},
		{
			name: "Admin",
			link: Routes.LOGIN
		},
		{
			name: "Privacy and Policity",
			link: Routes.MAIN
		},
		{
			name: "Terms and Conditions",
			link: Routes.MAIN
		},
		{
			name: "Contact",
			link: Routes.MAIN
		}
	];

	return (
		<nav className="header-links-wrapper">
			<LinkList links={links} />
			<SocialIcons />
		</nav>
	);
}
