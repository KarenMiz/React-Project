import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Error = ({ errorMessage }) => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%"}}
      >
        <Grid item xs={12} md={8} sx={{ alignSelf: "flex-start" }}>
          <Typography variant="h5" color="initial" align="center">
            Oops... something went wrong: {errorMessage}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{ alignSelf: "flex-start" }}>
          <img
            width="80%"
            src="/assets/images/broken-robot-error.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Error;