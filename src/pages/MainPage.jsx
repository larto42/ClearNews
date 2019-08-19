import React from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/shared/Section/Section";
import Stories from "../components/Stories/Stories";
import Logo from "../components/Logo/Logo";
import Gallery from "../components/Gallery/Gallery";

const numberOfFeaturedArticles = 6;

export default function MainPage() {
	return (
		<div className="main-page">
			<Logo />
			<Hero />
			<Section className="latest-stories" header="Latest Stories">
				<Stories
					className="latest-stories__stories"
					number={numberOfFeaturedArticles}
				/>
			</Section>
			<Gallery />
		</div>
	);
}
