// External
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

// Internal
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import LogInForm from "./pages/auth/LoginInForm";
import { useCurrentUser } from "./context/CurrentUserContext";

function App() {
    const currentUser = useCurrentUser();

    return (
        <div className={styles.App}>
            <NavBar />
            <Container
                className={
                    currentUser ? styles.MainLoggedIn : styles.MainLoggedOut
                }
            >
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route exact path="/login" render={() => <LogInForm />} />
                    <Route exact path="/signup" render={() => <SignUpForm />} />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
