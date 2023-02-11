// External

import Container from "react-bootstrap/Container";

// Internal
import NoResults from "../public/no-results.jpeg";
import styles from "../styles/NotFound.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "./Asset";
import Link from "next/link";

const NotFound = () => {
	return (
		<Container className={`${styles.NotFound} text-center`}>
			<Asset
				src={NoResults}
				message={`Sorry, the page you're looking for doesn't exist`}
			/>
			<Link
				href="/"
				className={`${btnStyles.Button} ${btnStyles.Purple} p-3`}
			>
				<i className="fas fa-home" /> Return to the good stuff{" "}
				<i className="fas fa-home" />
			</Link>
		</Container>
	);
};

export default NotFound;
