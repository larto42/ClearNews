import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import { withFirebase } from "./utils/Firebase";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./config/routes";
import Logo from "./components/Logo/Logo";
import HeaderLinks from "./components/HeaderLinks/HeaderLinks";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import CategoryPage from "./pages/CategoryPage";

const LinksNonAuth = () => {
	const links = [
		{
			name: "About",
			link: Routes.MAIN
		},
		{
			name: "Admin",
			link: Routes.LOGIN
		},
		{
			name: "Privacy and Policity",
			link: Routes.MAIN
		},
		{
			name: "Terms and Conditions",
			link: Routes.MAIN
		},
		{
			name: "Contact",
			link: Routes.MAIN
		}
	];

	return links;
};

const LinksAuth = () => {
	const links = [
		{
			name: "About",
			link: Routes.MAIN
		},
		{
			name: "Admin",
			link: Routes.LOGIN
		},
		{
			name: "Log out",
			link: Routes.LOGOUT
		},
		{
			name: "Contact",
			link: Routes.MAIN
		}
	];

	return links;
};

class App extends Component {
	state = {
		authUser: null,
		isMobileMenuOpen: false
	};

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
			authUser
				? this.setState({ authUser })
				: this.setState({ authUser: null });
		});
	}

	componentWillUnmount() {
		this.listener();
	}

	toggleMenu = () => {
		this.setState({
			isMobileMenuOpen: !this.state.isMobileMenuOpen
		});
	};

	render() {
		const menuClass = this.state.isMobileMenuOpen
			? "mobile-opened"
			: "mobile-closed";
		const hamburgerClass = this.state.isMobileMenuOpen
			? "hamburger-menu--open"
			: "";
			
		return (
			<div className="App">
				<Router basename={process.env.REACT_APP_BASE_URL}>
					<div
						className={`hamburger-menu ${hamburgerClass}`}
						onClick={this.toggleMenu}
					>
						<i className="fas fa-bars" />
					</div>
					<div className={`header-nav-wrapper ${menuClass}`}>
						<HeaderLinks
							links={this.state.authUser ? LinksAuth() : LinksNonAuth()}
						/>
						<Logo />
						<Menu />
					</div>
					<Route exact path={Routes.MAIN} component={MainPage} />
					<Route exact path={Routes.LOGIN} component={LoginPage} />
					<Route exact path={Routes.LOGOUT} component={LogoutPage} />
					<Route path={Routes.CATEGORY} component={CategoryPage} />
					<Footer links={this.state.authUser ? LinksAuth() : LinksNonAuth()} />
				</Router>
			</div>
		);
	}
}

export default withFirebase(App);
