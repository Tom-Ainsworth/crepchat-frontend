// External
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useRouter } from "next/router";

import axios from "axios";

// Internal
import styles from "../styles/SignUpLoginForm.module.css";
import btnStyles from "../styles/Button.module.css";
import appStyles from "../styles/App.module.css";

import { useSetCurrentUser } from "../src/contexts/CurrentUserContext";
import { useRedirect } from "../src/hooks/useRedirect";
import { setTokenTimestamp } from "../src/utils/utils";
import Link from "next/link";

function LogInForm() {
	const setCurrentUser = useSetCurrentUser();
	useRedirect("loggedIn");

	const [LogInData, setLogInData] = useState({
		username: "",
		password: "",
	});

	const { username, password } = LogInData;

	const [errors, setErrors] = useState({});

	const router = useRouter();

	const handleChange = (event) => {
		setLogInData({
			...LogInData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { data } = await axios.post(
				"/dj-rest-auth/login/",
				LogInData
			);
			router.back();
			setCurrentUser(data.user);
			setTokenTimestamp(data);
		} catch (err) {
			setErrors(err.response?.data);
			// console.log(err);
		}
	};

	return (
		<Row className={styles.Row}>
			<Col className="my-auto mx-auto" md={10}>
				<Container className={`${appStyles.Content} p-4 `}>
					<h1 className={styles.Header}>Log In</h1>
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
						{errors?.username?.map((message, idx) => (
							<Alert variant="warning" key={idx}>
								{message}
							</Alert>
						))}

						<Form.Group controlId="password">
							<Form.Label className="d-none">Password</Form.Label>
							<Form.Control
								className={styles.Input}
								type="password"
								placeholder="Password"
								name="password"
								value={password}
								onChange={handleChange}
							/>
						</Form.Group>
						{errors?.password?.map((message, idx) => (
							<Alert variant="warning" key={idx}>
								{message}
							</Alert>
						))}

						<Button
							className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
							type="submit"
						>
							Log In
						</Button>
						{errors?.non_field_errors?.map((message, idx) => (
							<Alert key={idx} variant="warning" className="mt-3">
								{message}
							</Alert>
						))}
					</Form>
				</Container>
				<Container className={`mt-3 ${appStyles.Content}`}>
					<Link className={styles.Link} href="/signup">
						Don&apos;t have an account? <span>Sign up here!</span>
					</Link>
				</Container>
			</Col>
		</Row>
	);
}

export default LogInForm;
