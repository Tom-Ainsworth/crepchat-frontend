// External
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

// Internal
import NoResults from "../assets/no-results.jpeg";
import styles from "../styles/NotFound.module.css";
import btnStyles from "../styles/Button.module.css";
import Asset from "./Asset";

const NotFound = () => {
    return (
        <Container className={`${styles.NotFound} text-center`}>
            <Asset
                src={NoResults}
                message={`Sorry, the page you're looking for doesn't exist`}
            />
            <Link
                className={`${btnStyles.Button} ${btnStyles.Purple} p-3`}
                to="/"
            >
                <i className="fas fa-home" /> Return to the good stuff{" "}
                <i className="fas fa-home" />
            </Link>
        </Container>
    );
};

export default NotFound;
