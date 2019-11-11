import React, { Component } from "react";

import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <footer
          style={{
            backgroundColor: "white",
            padding: "24px"
          }}
        >
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Anas Berkati - 10 Novembre 2019
          </Typography>
        </footer>
      </React.Fragment>
    );
  }
}
