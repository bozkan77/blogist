import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// custom components
import PostList from "./components/PostList";
import Header from "./components/Header";

// third-party components
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const App = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Container maxWidth ="lg">
        <Header />
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostList}></Route>
              </Switch>
              <Redirect from="/" to="/posts" />
            </Router>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
