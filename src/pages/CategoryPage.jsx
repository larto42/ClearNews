import React from "react";
import Stories from "../components/Stories/Stories";
import Logo from "../components/Logo/Logo";
import Title from "../components/shared/Title/Title";
import Breadcrumbs from "../components/shared/Breadcrumbs/Breadcrumbs";

export default function CategoryPage() {
	const href = window.location.href;
	const catArr = href.split("/");
	const cat = catArr.pop();

	return (
		<div className="category-page">
			<Logo />
			<Breadcrumbs links={["Home", cat]} />
			<Title className="category-page__title" text="Culture" />
			<Stories className="category-page__stories" number={22} />
		</div>
	);
}
