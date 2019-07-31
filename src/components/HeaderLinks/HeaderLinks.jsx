import React from 'react'
import SocialIcons from './SocialIcons';
import './HeaderLinks.scss';
import LinkList from '../shared/LinkList';

export default function HeaderLinks() {
    const links = [
        {
            name: "About",
            link: "#"
        },
        {
            name: "Advertise",
            link: "#"
        },
        {
            name: "Privacy and Policity",
            link: "#"
        },
        {
            name: "Terms and Conditions",
            link: "#"
        },
        {
            name: "Contact",
            link: "#"
        },
    ];

    return (
			<nav className="header-links-wrapper">
                <LinkList links={links} />
                <SocialIcons />
			</nav>
		);
}
