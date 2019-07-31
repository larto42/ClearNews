import React from 'react';
import "./App.scss";
import Logo from './components/Logo/Logo';
import HeaderLinks from './components/HeaderLinks/HeaderLinks';
import Menu from './components/Menu/Menu';
import Hero from './components/Hero/Hero';
import '@fortawesome/fontawesome-free/css/all.css';
import Section from './components/shared/Section/Section';
import Stories from './components/Stories/Stories';

function App() {
  return (
    <div className="App">
      <div className="header-nav-wrapper">
        <HeaderLinks />
        <Logo />
        <Menu />
      </div>
      <Logo />
      <Hero />
      <Section header="Latest Stories">
        <Stories />
      </Section>
    </div>
  );
}

export default App;
