import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import MusicPage from "./music";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import { AuthProvider } from "./../util/auth";
import { ThemeProvider } from "./../util/theme";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <>
              <Navbar
                color="transparent"
                logo="https://images.squarespace-cdn.com/content/v1/5de67da1631c6c6aca04d6d1/1609165831473-SY8SFKEQDQK5HRJVYMJH/Jubilee+Year+Our+50th+Anniversary_+Logo_5-in_500-dpi_CMYK-3.jpg?format=1500w"
                logoInverted="https://images.squarespace-cdn.com/content/v1/5de67da1631c6c6aca04d6d1/1575395093171-M2RIV0T5LLY8KLF67RCW/Epiphany+logo+no+back+final.png?format=200w"
              />

              <Switch>
                <Route exact path="/" component={IndexPage} />

                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/faq" component={FaqPage} />

                <Route exact path="/contact" component={ContactPage} />

                <Route exact path="/music" component={MusicPage} />

                <Route exact path="/dashboard" component={DashboardPage} />

                <Route exact path="/auth/:type" component={AuthPage} />

                <Route
                  exact
                  path="/settings/:section"
                  component={SettingsPage}
                />

                <Route exact path="/legal/:section" component={LegalPage} />

                <Route
                  exact
                  path="/firebase-action"
                  component={FirebaseActionPage}
                />

                <Route component={NotFoundPage} />
              </Switch>

              <Footer
                bgColor="light"
                size="normal"
                bgImage=""
                bgImageOpacity={1}
                copyright={`© ${new Date().getFullYear()} Company`}
                logo="https://images.squarespace-cdn.com/content/v1/5de67da1631c6c6aca04d6d1/1575395093171-M2RIV0T5LLY8KLF67RCW/Epiphany+logo+no+back+final.png?format=500w"
                logoInverted="https://images.squarespace-cdn.com/content/v1/5de67da1631c6c6aca04d6d1/1575395093171-M2RIV0T5LLY8KLF67RCW/Epiphany+logo+no+back+final.png?format=500w"
                sticky={true}
              />
            </>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
