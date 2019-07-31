import React from 'react'
import './Section.scss'

export default function Section(props) {
    return (
        <section className="section">
            <h2 className="section__header">{props.header}</h2>
            {props.children}
        </section>
    )
}
