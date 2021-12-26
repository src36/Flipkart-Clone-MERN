import React from "react";
import { Box, Grid } from "@material-ui/core";
import { imageURL } from "../../constants/data";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

const useStyle = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
  },
  help: {
    [theme.breakpoints.down("md")]: {
      objectFit: "cover",
      height: 120,
    },
  },
}));

const MidSection = () => {
  const classes = useStyle();
  const coronaURL =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Grid container className={classes.wrapper}>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={image}>
            <img src={image} alt="midImg" className={classes.image} />
          </Grid>
        ))}
      </Grid>
      <img
        src={coronaURL}
        alt=""
        style={{ width: "100%" }}
        className={clsx(classes.wrapper, classes.help)}
      />
    </>
  );
};

export default MidSection;
