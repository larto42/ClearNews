import React from "react";

export default function Breadcrumbs(props) {
	return (
		<div className="breadcrumbs">
			{props.links.map(
				(item, index) => (
					<React.Fragment>
						<span className="breadcrumbs__item">{item}</span>
						{index < props.links.length - 1 ? (
							<span className="breadcrumbs__arrow">></span>
						) : (
							""
						)}
					</React.Fragment>
				),
				""
			)}
		</div>
	);
}
