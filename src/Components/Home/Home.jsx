import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";

const Home = () => {
  return (
    <Grid
      container
      sx={{ paddingLeft: "21em", paddingRight: "21em" }}
      className="px-5 lg:px-36 justify-between"
    >
      <Grid
        item
        xs={0}
        lg={3}
        sx={{ paddingTop: "1rem" }}
        className="hidden lg:block w-full relative"
      >
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className="hidden lg:block w-full relative">
        <p className="text-center">Center</p>
      </Grid>
      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <p className="text-center">Right</p>
      </Grid>
    </Grid>
  );
};

export default Home;
