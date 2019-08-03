import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { withFirebase } from "../utils/Firebase";
import { withRouter } from "react-router-dom";

const LoginFormConnected = withRouter(withFirebase(LoginForm));

export default function LoginPage() {
	return (
		<div>
			<LoginFormConnected />
		</div>
	);
}
