import React from 'react'
import LinkList from '../shared/LinkList';
import "./Menu.scss";

export default function Menu() {
    const links = [
        {
            name: "Home",
            link: "#"
        },
        {
            name: "Culture",
            link: "#"
        },
        {
            name: "Entertainment",
            link: "#"
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
        },
    ];

    return (
			<nav className="menu-wrapper">
                <LinkList links={links} />
			</nav>
		);
}
