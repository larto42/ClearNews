import React from "react";
import LinkList from "../shared/LinkList";

export default function Footer({ links }) {
	return (
		<nav className="footer-links-wrapper">
			<LinkList links={links} />
			<div className="footer__copyright">
				Copyright <span className="footer__copyright-sign">&copy;</span> 2019
				Clear News.
			</div>
		</nav>
	);
}
