import React, { Component } from "react";

const withAuthorization = condition => Component => {
	class WithAuthorization extends Component {
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
			return <Component {...this.props} />;
		}
	}
};
