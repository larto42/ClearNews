import React from "react";

export default function Title(props) {
	return <h2 className={`title ${props.className}`}>{props.text}</h2>;
}
