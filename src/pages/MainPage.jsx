import React from "react";
import Hero from "../components/Hero/Hero";
import Section from "../components/shared/Section/Section";
import Stories from "../components/Stories/Stories";
import Logo from "../components/Logo/Logo";
import Gallery from "../components/Gallery/Gallery";
import TextStories from "../components/TextStories/TextStories";

const numberOfFeaturedArticles = 6;
const numberOfCategoryArticles = 4;
const numberOfTextArticles = 3;

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
			<Section className="category" header="Economy">
				<Stories
					className="category__stories"
					number={numberOfCategoryArticles}
				/>
			</Section>

			<Section className="side-category" header="Healt">
				<TextStories
					className="text-category__stories"
					number={numberOfTextArticles}
				/>
			</Section>
		</div>
	);
}
