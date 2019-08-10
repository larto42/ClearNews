import React from "react";
import SocialIcons from "./SocialIcons";
import LinkList from "../shared/LinkList";
import * as Routes from "../../config/routes";

const LinksNonAuth = () => {
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

	return links;
};

const LinksAuth = () => {
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
			name: "Log out",
			link: Routes.LOGOUT
		},
		{
			name: "Contact",
			link: Routes.MAIN
		}
	];

	return links;
};

export default function HeaderLinks({ authUser }) {
	return (
		<nav className="header-links-wrapper">
			<LinkList links={authUser ? LinksAuth() : LinksNonAuth()} />
			<SocialIcons />
		</nav>
	);
}
