import React from "react";
import Home from "./Home";
import Login from "./Login";
import { isLogin } from "../hooks/auth";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

const App = () => {
  const [user] = isLogin();
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
