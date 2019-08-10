import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Routes from "./config/routes";
import Logo from "./components/Logo/Logo";
import HeaderLinks from "./components/HeaderLinks/HeaderLinks";
import Menu from "./components/Menu/Menu";

import MainPage from "./pages/MainPage";

import "@fortawesome/fontawesome-free/css/all.css";
import LoginPage from "./pages/LoginPage";

import { withFirebase } from "./utils/Firebase";
import LogoutPage from "./pages/LogoutPage";

class App extends Component {
	state = {
		authUser: null
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

	render() {
		return (
			<div className="App">
				<Router>
					<div className="header-nav-wrapper">
						<HeaderLinks authUser={this.state.authUser} />
						<Logo />
						<Menu />
					</div>
					<Route exact path={Routes.MAIN} component={MainPage} />
					<Route exact path={Routes.LOGIN} component={LoginPage} />
					<Route exact path={Routes.LOGOUT} component={LogoutPage} />
				</Router>
			</div>
		);
	}
}

export default withFirebase(App);
