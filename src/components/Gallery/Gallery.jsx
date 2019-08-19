import React, { Component } from "react";

export default class Gallery extends Component {
	state = {
		images: [
			{
				id: 1,
				url: "https://source.unsplash.com/random/?social",
				alt: "random img"
			},
			{
				id: 2,
				url: "https://source.unsplash.com/random/?school",
				alt: "random img"
			},
			{
				id: 3,
				url: "https://source.unsplash.com/random/?peace",
				alt: "random img"
			}
		]
	};

	render() {
		return (
			<section className="gallery">
				<h2 className="gallery__title">In pictures</h2>
				<div className="pictures">
					<div className="pictures__wrapper">
						{this.state.images.map(item => (
							<picture key={item.id} className="pictures__item">
								<img
									className="pictures__image"
									src={item.url}
									alt={item.alt}
								/>
							</picture>
						))}
					</div>
				</div>
			</section>
		);
	}
}
