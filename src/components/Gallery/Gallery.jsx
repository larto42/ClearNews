import React, { Component } from "react";
import SwipeListener from "swipe-listener";

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
		],
		currImg: 0
	};

	picturesRef = React.createRef();

	componentDidMount = () => {
		const listener = SwipeListener(this.picturesRef.current);
		console.log("picture ref", this.picturesRef);
		this.picturesRef.current.addEventListener("swipe", e => {
			const { left, right } = e.detail.directions;
			const { currImg } = this.state;
			console.log("curr img przed zmiana", currImg);
			const len = this.state.images.length - 1;
			let index = 0;
			if (left) {
				index = currImg + 1 > len ? len : currImg + 1;
			} else {
				if (right) {
					index = currImg - 1 < 0 ? 0 : currImg - 1;
				}
			}

			this.setState({
				currImg: index
			});

			console.log(left, right, currImg);
		});
	};

	componentWillUnmount = () => {
		this.picturesRef.current.removeEventListener("swipe");
	};

	render() {
		const { images, currImg } = this.state;
		const imgCount = images.length;
		const transform = 100 / imgCount;

		const galeryTransformStyle = {
			transform: `translateX(calc(-${transform * currImg}% - ${10 *
				currImg}px))`
		};

		return (
			<section className="gallery">
				<h2 className="gallery__title">In pictures</h2>
				<div className="pictures">
					<div
						ref={this.picturesRef}
						className="pictures__wrapper"
						style={galeryTransformStyle}
					>
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
