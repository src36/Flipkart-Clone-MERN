import React, { useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";

//component
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import MidSection from "./MidSection";

// import { products } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/ProductActions";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: 10,
    background: "#f2f2f2",
  },
  leftComponent: {
    width: "83%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  rightComponent: {
    background: "#ffffff",
    padding: 5,
    margin: "12px 0 0 10px",
    width: "17%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Home = () => {
  const classes = useStyle();
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style={{ display: "flex" }}>
          <Box className={classes.leftComponent}>
            <Slide timer={true} title="Deal of the Day" products={products} />
          </Box>
          <Box className={classes.rightComponent}>
            <img src={adURL} alt="" style={{ width: 190, height: 375 }} />
          </Box>
        </Box>
        <MidSection />
        <Slide timer={false} title="Discounts for You" products={products} />
        <Slide timer={false} title="Suggested Items" products={products} />
        <Slide timer={false} title="Top Selection" products={products} />
        <Slide timer={false} title="Recommended Items" products={products} />
        <Slide timer={false} title="Best Sellers" products={products} />
      </Box>
    </>
  );
};

export default Home;
