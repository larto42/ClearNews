import React from "react";

export default function Section(props) {
	return (
		<section className="section">
			<h2 className="section__header">{props.header}</h2>
			{props.children}
		</section>
	);
}
