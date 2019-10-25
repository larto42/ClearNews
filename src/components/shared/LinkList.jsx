import React from "react";
import { Link } from "react-router-dom";

export default props => {
	const handleClick = name => {
		console.log("click", name);
	};
	const { links, activeSite, setActiveSite } = props;

	return (
		<ul className="links-list">
			{links.map(({ name, link }, index) => {
				return (
					<li
						key={index}
						className={
							"links-list__item" +
							(activeSite === name ? " links-list__item--active" : "")
						}
						onClick={() => setActiveSite(name)}
					>
						<Link to={link} className="links-list__link">
							{name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};
