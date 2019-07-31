import React, { Component } from 'react'
import ArticleTile from '../shared/ArticleTile/ArticleTile';

export default class Stories extends Component {
    state = {
        articles: [
            {
                img: 'https://source.unsplash.com/random',
                imgAlt: 'img alt',
                title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque facere qui maiores sint rerum.',
                author: 'Clark Kent',
                commentsAmount: 45,
                date: '14 Feb 2017'
            },
            {
                img: 'https://source.unsplash.com/random/?technology',
                imgAlt: 'img alt2',
                title: 'L2orem ipsum dolor sit amet consectetur adipisicing elit. Labore itaque facere qui maiores sint rerum.',
                author: 'C2ark Kent',
                commentsAmount: 41,
                date: '11 Feb 2017'
            }
        ]
    };

    render() {
        const {articles} = this.state;
        return (
            <div>
                {articles.map((item, index) => (
                    <ArticleTile key={index} article={item}/>
                ))}
            </div>
        );
    }
}
