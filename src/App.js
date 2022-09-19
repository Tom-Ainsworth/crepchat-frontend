// External
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

// Internal
import styles from "./App.module.css";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className={styles.App}>
            <NavBar />
            <Container className={styles.Main}>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home</h1>} />
                    <Route exact path="/login" render={() => <h1>Log In</h1>} />
                    <Route
                        exact
                        path="/signup"
                        render={() => <h1>Sign Up</h1>}
                    />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;
