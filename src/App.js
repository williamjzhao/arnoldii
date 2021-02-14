import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  MenuItem,
  Menu,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Home from "./components/home";
import Profile from "./components/profile";
import "./App.css";

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
}));

export default function App() {
  const classes = useStyles();

  const [title, setTitle] = useState("Home");

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (title) => {
    setTitle(title);
    setAnchorEl(null);
  };

  return (
    <Router>
      <div>
        <nav>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose("Home")}>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => handleClose("Profile")}>
                  <Link to="/profile" className="link">
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={() => handleClose("???")}>
                  <Link to="/???" className="link">
                    ???
                  </Link>
                </MenuItem>
              </Menu>
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </nav>

        <Switch>
          <Route path="/profile" onClick={() => setTitle("Profile")}>
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
