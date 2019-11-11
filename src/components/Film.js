import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Redirect, Link } from "react-router-dom";

export default class Film extends Component {
  render() {
    if (!this.props.location.filmName) return <Redirect to="/" />;
    const {
      filmName,
      filmType,
      filmStatus,
      filmImage,
      filmSummary
    } = this.props.location;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fc", height: "124vh" }}
          >
            <div style={{ textAlignLast: "center" }}>
              <h2>Fiche Technique</h2>
              <p>Name :{filmName}</p>
              <p>Type : {filmType}</p>
              <p>Status : {filmStatus}</p>
              <img src={filmImage} alt="aoaoa" style={{ maxWidth: "30%" }} />
              {filmSummary ? (
                <div>
                  <b>
                    <i>Synopsis</i>
                  </b>
                </div>
              ) : (
                <div>Pas de Description pour ce film</div>
              )}
              <p
                style={{ margin: "10px" }}
                dangerouslySetInnerHTML={{
                  __html: filmSummary ? filmSummary : ""
                }}
              />
              <Link to="/">Retour</Link>
            </div>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}
