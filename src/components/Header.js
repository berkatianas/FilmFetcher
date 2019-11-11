import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Toolbar>
              <LiveTvIcon />{" "}
              <Typography variant="h6" color="inherit" noWrap>
                Test Films
              </Typography>
            </Toolbar>
          </Link>
        </AppBar>

        {/* Hero unit */}
        <div style={{ marginTop: "16px" }}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Axios Film's Fetch
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              En ce qui concerne les films sans photos dans l'API , j'ai mis une
              photo Random pour avoir un affichage clean
            </Typography>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
