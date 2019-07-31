import React from 'react'
import heroJPG from '../../images/hero.jpg'
import heroWEBP from '../../images/hero.webp'
import './Hero.scss'

export default function Hero() {
    return (
			<div className="container">
				<picture>
					<source type="image/webp" srcSet={heroWEBP} />
					<img src={heroJPG} alt="featured article" />
				</picture>
				<div className="title">
					<span className="title__author">By Clark Kent</span>
					<h2 className="title__title">
						Ladies others the six desire age. Bred am soon park past read by
						lain. As excuse eldest no moment.
					</h2>
				</div>
			</div>
		);
}
