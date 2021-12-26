import React, { useState, useContext } from "react";
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// component
import Login from "../login/Login";
import { LoginContext } from "../../context/ContextProvider";
import Profile from "./Profile";

const useStyle = makeStyles((theme) => ({
  Login: {
    background: "#ffffff",
    color: "#2874f0",
    textTransform: "unset",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      background: "#2874f0",
      color: "#ffffff",
    },
  },
  wrapper: {
    margin: "0  7%  0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#fff",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  container: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const HeaderButton = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Link to="/">
          <Button
            variant="contained"
            className={classes.Login}
            onClick={() => openLoginDialog()}
          >
            Login
          </Button>
        </Link>
      )}

      <Link to="/">
        <Typography style={{ marginTop: "5px" }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "10px" }}>Cart</Typography>
      </Link>
      <Login open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
};

export default HeaderButton;
