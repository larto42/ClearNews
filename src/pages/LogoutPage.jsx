import React, { Component } from "react";
import { withFirebase } from "../utils/Firebase";
import * as ROUTES from "../config/routes";

class LogoutPage extends Component {
	componentDidMount() {
		this.props.firebase.doSignOut();
		this.props.history.push(ROUTES.MAIN);
	}

	render() {
		return <React.Fragment />;
	}
}

export default withFirebase(LogoutPage);
