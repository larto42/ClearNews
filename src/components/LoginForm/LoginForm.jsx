import React, { Component } from "react";
import * as ROUTES from "../../config/routes";

export default class LoginForm extends Component {
	state = {
		email: "",
		password: "",
		error: null
	};

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const { email, password } = this.state;

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(authUser => {
				console.log("authorized!", authUser);
				this.props.history.push(ROUTES.MAIN);
			})
			.catch(error => {
				console.log("error!", error);
				this.setState({ error: error });
			});
	};

	render() {
		const { email, password, error } = this.state;

		const isInvalid = email === "" || password === "";
		return (
			<div className="container">
				<div className="login-wrapper">
					<h2 className="title">Log in</h2>
					<form className="form" onSubmit={this.handleSubmit}>
						<input
							type="email"
							name="email"
							value={email}
							className="form__input"
							placeholder="e-mail"
							onChange={this.handleChange}
						/>
						<input
							type="password"
							name="password"
							value={password}
							className="form__input"
							placeholder="password"
							onChange={this.handleChange}
						/>
						<input
							type="submit"
							className="form__button"
							value="Log in"
							disabled={isInvalid}
						/>
						{error && <p>{error.message}</p>}
					</form>
				</div>
			</div>
		);
	}
}
