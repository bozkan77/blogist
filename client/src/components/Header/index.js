import React from "react";

import { makeStyles } from "@material-ui/core/styles";

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

import PenIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Container>
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar>
            <IconButton edge="start" className={classes.container} />
            <Typography
              variant="h6"
              color="secondary"
              className={classes.title}
            >
              <a href="http://localhost:3000/post">Blogist</a>
            </Typography>
            <Button color="primry" variant="outlined" startIcon={<PenIcon />}>
              Yeni Yazı
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
