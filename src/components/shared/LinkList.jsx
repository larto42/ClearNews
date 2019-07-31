import React from 'react'

export default props => {
	return (
		<ul className="links-list">
			{props.links.map((item, index) => {
                const {name, link} = item;
                return (
                    <li key={index} className="links-list__item">
                        {/* eslint-disable-next-line */}
                        <a href={link} className="links-list__link">{name}</a>
                    </li>
                )
			})}
		</ul>
	);
};
