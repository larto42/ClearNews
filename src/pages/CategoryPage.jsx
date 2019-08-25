import React from "react";
import Stories from "../components/Stories/Stories";
import Logo from "../components/Logo/Logo";
import Title from "../components/shared/Title/Title";

export default function CategoryPage() {
	return (
		<div className="category-page">
			<Logo />
			breadcrumbs
			<Title text="Culture" />
			<Stories className="category-page__stories" number={9} />
		</div>
	);
}
