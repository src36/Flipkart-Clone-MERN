import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, makeStyles, Typography, Button, Grid } from "@material-ui/core";
import { removeFromCart } from "../../redux/actions/CartActions";
import { payUsingPaytm } from "../../service/Api";
import { post } from "../../utils/Paytm";

//component
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: "30px 135px",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    // width: "67%",
    paddingRight: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  rightComponent: {
    // width: "30%",
    background: "#fff",
    paddingLeft: 15,
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 22px",
    background: "#fff",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
    borderTop: "1px solid #f0f0f0",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 50,
  },
}));

const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {});

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
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
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={8}
            md={8}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem
                item={item}
                removeItemFromCart={removeItemFromCart}
                key={item.id}
              />
            ))}
            <Box className={classes.bottom}>
              <Button
                variant="contained"
                className={classes.placeOrder}
                onClick={() => buyNow()}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            className={classes.rightComponent}
          >
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
