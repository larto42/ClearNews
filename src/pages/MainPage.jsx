import React from 'react'
import Hero from '../components/Hero/Hero';
import Section from '../components/shared/Section/Section';
import Stories from '../components/Stories/Stories';
import Logo from '../components/Logo/Logo';

export default function MainPage() {
    return (
        <div>
            <Logo />
            <Hero />
            <Section header="Latest Stories">
                <Stories />
            </Section>
        </div>
    );
}
