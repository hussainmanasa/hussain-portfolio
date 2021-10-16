import "./App.css";
import "@fontsource/roboto/400.css";
import Header from "./components/Header/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Router>
              <Header />
              <div className="main-content container-shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
