// External
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

// Internal
import styles from "../styles/SignUpLoginForm.module.css";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../styles/App.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRedirect } from "../src/hooks/useRedirect";

const SignUpForm = () => {
	useRedirect("loggedIn");

	let router = useRouter();
	const [signUpData, setSignUpData] = useState({
		username: "",
		password1: "",
		password2: "",
	});
	const { username, password1, password2 } = signUpData;

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		setSignUpData({
			...signUpData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post("/dj-rest-auth/registration/", signUpData);
			router.push("/login");
		} catch (err) {
			setErrors(err.response?.data);
		}
	};

	return (
		<Row className={styles.Row}>
			<Col className="my-auto mx-auto py-2 p-md-2" md={10}>
				<Container className={`${appStyles.Content} p-4 `}>
					<h1 className={styles.Header}>sign up</h1>

					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="username">
							<Form.Label className="d-none">Username</Form.Label>
							<Form.Control
								className={styles.Input}
								type="text"
								placeholder="Username"
								name="username"
								value={username}
								onChange={handleChange}
							/>
						</Form.Group>
						{errors.username?.map((message, idx) => (
							<Alert variant="warning" key={idx}>
								{message}
							</Alert>
						))}

						<Form.Group controlId="password1">
							<Form.Label className="d-none">Password</Form.Label>
							<Form.Control
								className={styles.Input}
								type="password"
								placeholder="Password"
								name="password1"
								value={password1}
								onChange={handleChange}
							/>
						</Form.Group>
						{errors.password1?.map((message, idx) => (
							<Alert variant="warning" key={idx}>
								{message}
							</Alert>
						))}

						<Form.Group controlId="password2">
							<Form.Label className="d-none">
								Confirm Password
							</Form.Label>
							<Form.Control
								className={styles.Input}
								type="password"
								placeholder="Confirm Password"
								name="password2"
								value={password2}
								onChange={handleChange}
							/>
						</Form.Group>
						{errors.password2?.map((message, idx) => (
							<Alert variant="warning" key={idx}>
								{message}
							</Alert>
						))}

						<Button
							className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
							type="submit"
						>
							Sign Up
						</Button>
						{errors.non_field_errors?.map((message, idx) => (
							<Alert key={idx} variant="warning" className="mt-3">
								{message}
							</Alert>
						))}
					</Form>
				</Container>
				<Container className={`mt-3 ${appStyles.Content}`}>
					<Link className={styles.Link} href="/login">
						Already have an account? <span>Log In</span>
					</Link>
				</Container>
			</Col>
		</Row>
	);
};

export default SignUpForm;
