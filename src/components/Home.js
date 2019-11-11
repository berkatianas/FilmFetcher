import React, { Component, Fragment } from "react";
import SearchResults from "react-filter-search";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: ""
    };
  }
  async componentDidMount() {
    const res = await axios.get("https://api.tvmaze.com/search/shows?q=test");
    this.setState({
      data: res.data
    });
  }
  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
  };

  render() {
    const { data, value } = this.state;

    return (
      <React.Fragment>
        <main>
          <Container
            style={{ paddingTop: "32px", paddingBottom: "32px" }}
            maxWidth="md"
          >
            <div style={{ paddingTop: "32px", paddingBottom: "32px" }}>
              <TextField
                id="standard-basic"
                label="Tapez votre recherche"
                margin="normal"
                value={value}
                onChange={this.handleChange}
                style={{ display: "table", margin: "0 auto" }}
                autoComplete="off"
              />
            </div>

            <SearchResults
              value={value}
              data={data}
              renderResults={results => (
                <Fragment>
                  <div style={{ display: "table", margin: "10px auto" }}>
                    {results.length === 0 ? (
                      <h4 style={{ marginBottom: "260px" }}>
                        Pas de résultats
                      </h4>
                    ) : (
                      <h4>
                        Voici les {results.length} résultat(s) de recherche
                      </h4>
                    )}
                  </div>
                  <Grid container spacing={4}>
                    {results.map(film => (
                      <Grid item key={film.show.id} xs={12} sm={6} md={4}>
                        <Card
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <CardMedia
                            style={{ paddingTop: "56.25%" }}
                            title="Image title"
                            image={
                              film.show.image !== null
                                ? film.show.image.medium
                                : "https://source.unsplash.com/random"
                            }
                          />
                          <CardContent style={{ flexGrow: 1 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {film.show.name}
                            </Typography>
                            <Typography>{film.show.language}</Typography>
                            <Typography>{film.show.premiered}</Typography>
                            <Typography>
                              {film.show.network.country.name}
                            </Typography>
                          </CardContent>
                          <CardActions style={{ justifyContent: "center" }}>
                            <Link
                              to={{
                                pathname: `/${film.show.id}`,
                                filmName: `${film.show.name}`,
                                filmType: `${film.show.type}`,
                                filmStatus: `${film.show.status}`,
                                filmSummary: `${film.show.summary}`,
                                filmImage: `${
                                  film.show.image !== null
                                    ? film.show.image.medium
                                    : "https://source.unsplash.com/random"
                                }`
                              }}
                              style={{
                                textDecoration: "none",
                                color: "black",
                                fontSize: "20px"
                              }}
                            >
                              Voir Détails
                            </Link>
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Fragment>
              )}
            />
          </Container>
        </main>
      </React.Fragment>
    );
  }
}
