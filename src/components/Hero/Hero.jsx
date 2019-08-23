import React from "react";
import heroJPG from "../../images/hero.jpg";
import heroWEBP from "../../images/hero.webp";

export default function Hero() {
	return (
		<div className="hero-container">
			<picture>
				<source type="image/webp" srcSet={heroWEBP} />
				<img src={heroJPG} alt="featured article" />
			</picture>
			<div className="hero-title">
				<span className="hero-title__author">By Clark Kent</span>
				<h2 className="hero-title__title">
					Ladies others the six desire age. Bred am soon park past read by lain.
					As excuse eldest no moment.
				</h2>
			</div>
		</div>
	);
}
