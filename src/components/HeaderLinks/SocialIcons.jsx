import React from 'react'

export default function SocialIcons() {
    const icons = [
        'fa-facebook-f',
        'fa-instagram',
        'fa-twitter',
        'fa-google'
    ];
    return (
			<div>
				<ul className="social-icons-list">
					{icons.map((item, index) => (
						<li key={index} className="social-icons-list__icon">
                            {/* eslint-disable-next-line */}
                            <a href="#"><i className={`fab ${item}`}></i></a>
                        </li>
					))}
				</ul>
			</div>
		);
}
