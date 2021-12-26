import React from "react";
import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { ShoppingCart, FlashOn } from "@material-ui/icons";
import { addToCart } from "../../redux/actions/CartActions";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { payUsingPaytm } from "../../service/Api";
import { post } from "../../utils/Paytm";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#FFF",
    marginRight: 10,
  },
  buyNow: {
    background: "#fb641b",
    color: "#FFF",
  },
}));

const ActionItems = ({ product }) => {
  const classes = useStyle();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const addItemToCart = () => {
    dispatch(addToCart(id));
    navigate("/cart");
  };

  const buyNow = () => {
    let response = payUsingPaytm({
      amount: 500,
      email: "sourabhchavan00@gmail.com",
    });

    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <Box className={classes.leftContainer}>
      <img
        src={product.detailUrl}
        alt="detailurlImg"
        className={classes.productImage}
      />
      <br />
      <Button
        variant="contained"
        className={clsx(classes.button, classes.addToCart)}
        onClick={() => addItemToCart()}
      >
        <ShoppingCart />
        Add to Cart
      </Button>
      <Button
        variant="contained"
        className={clsx(classes.button, classes.buyNow)}
        onClick={() => buyNow()}
      >
        <FlashOn />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItems;
