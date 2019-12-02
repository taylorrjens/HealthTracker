import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, Route } from "react-router-dom";
import { auth, db } from "./firebase";
import Static from "./Static";
import Profile from "./Profile";
import Survey from "./Survey";

export function App(props) {
  const [drawer_open, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(u => {
      if (u) {
        setUser(u);
      } else {
        props.history.push("/");
      }
    });

    return unsubscribe;
  }, [props.history]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        props.history.push("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  if (!user) {
    return <div />;
  }

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => {
              setDrawerOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            variant="h6"
            style={{ marginLeft: 15, marginRight: 15, flexGrow: 1 }}
          >
            General Info
          </Typography>
          <Typography color="inherit" style={{ marginRight: 30 }}>
            Hi {user.email}!
          </Typography>
          <Button onClick={handleSignOut} type={"password"} color="inherit">
            Sign Out
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        open={drawer_open}
        onClose={() => {
          setDrawerOpen(false);
        }}
      >
        <List>
          <ListItem
            button
            to="/app"
            component={Link}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Static" />
          </ListItem>
          <ListItem
            button
            to="/app/survey"
            component={Link}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Basic Info Survey" />
          </ListItem>
          <ListItem
            button
            to="/app/charts"
            component={Link}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            <ListItemText primary="Your Profile" />
          </ListItem>
        </List>
      </Drawer>
      <Route
        exact
        path="/app/"
        render={routeProps => {
          return (
            <Static
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
      <Route
        exact
        path="/app/survey/"
        render={routeProps => {
          return (
            <Survey
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
      <Route
        path="/app/profile/"
        render={routeProps => {
          return (
            <Profile
              user={user}
              match={routeProps.match}
              location={routeProps.location}
              history={routeProps.history}
            />
          );
        }}
      />
    </div>
  );
}
