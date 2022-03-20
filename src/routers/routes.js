import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing all the themes
import ThemeOne from "../themes/theme-one";
import GuyMint from "../themes/guyMintSignle";
import GirlMint from "../themes/girlMintSignle"
class MyRouts extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={ThemeOne} />
            <Route exact path="/test_URL" component={GuyMint} />
            <Route exact path="/test_girl_URL" component={GirlMint} />

          </Switch>
        </Router>
      </div>
    );
  }
}
export default MyRouts;