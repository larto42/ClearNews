import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./config/routes";
import Logo from "./components/Logo/Logo";
import HeaderLinks from "./components/HeaderLinks/HeaderLinks";
import Menu from "./components/Menu/Menu";

import MainPage from "./pages/MainPage";

import "@fortawesome/fontawesome-free/css/all.css";
import LoginPage from "./pages/LoginPage";

function App() {
	return (
		<div className="App">
			<Router>
				<div className="header-nav-wrapper">
					<HeaderLinks />
					<Logo />
					<Menu />
				</div>
				<Route exact path={Routes.MAIN} component={MainPage} />
				<Route exact path={Routes.LOGIN} component={LoginPage} />
			</Router>
		</div>
	);
}

export default App;
