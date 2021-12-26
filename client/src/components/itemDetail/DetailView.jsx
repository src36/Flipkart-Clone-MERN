import React, { useEffect } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/ProductActions";
import clsx from "clsx";
import { LocalOffer, ArrowForwardIos } from "@material-ui/icons";

//component
import ActionItems from "./ActionItems";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    // margin: "0 80px",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  greyTextColor: {
    color: "#878787",
  },
  localOffer: {
    marginRight: 10,
    color: "#00CC00",
    fontSize: 18,
  },
}));

const DetailView = () => {
  const classes = useStyles();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const superCoin =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const { product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={12} xs={12} style={{ minWidth: "40%" }}>
            <ActionItems product={product} />
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
              style={{ cursor: "pointer" }}
            >
              8 Ratings & 1 Review
              <span>
                <img
                  src={fassured}
                  alt="fassured-logo"
                  style={{
                    width: "77px",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount}off
              </span>
            </Typography>
            <Typography style={{ marginTop: 20, fontWeight: 600 }}>
              Available offers
            </Typography>
            <Box className={classes.smallText}>
              <Typography>
                <LocalOffer className={classes.localOffer} />
                <span style={{ fontWeight: "600" }}>Bank Offer</span> 10%
                Instant Discount on Punjab National Bank Debit and Credit Cards
                <span
                  style={{
                    fontWeight: "600",
                    color: "#2874f0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  T&C
                </span>
              </Typography>
              <Typography>
                <LocalOffer className={classes.localOffer} />
                <span style={{ fontWeight: "600" }}>Bank Offer</span> 5%
                Unlimited Cashback on Flipkart Axis Bank Credit Card{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "#2874f0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  T&C
                </span>
              </Typography>
              <Typography>
                <LocalOffer className={classes.localOffer} />
                <span style={{ fontWeight: "600" }}>Bank Offer</span> 20% off on
                1st txn with Amex Network Cards issued by SBI Cards and Mobikwik
                <span
                  style={{
                    fontWeight: "600",
                    color: "#2874f0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  T&C
                </span>
              </Typography>
              <Typography>
                <LocalOffer className={classes.localOffer} />
                <span style={{ fontWeight: "600" }}>Bank Offer</span> Flat ₹75
                off on first Flipkart Pay Later order of ₹500 and above{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "#2874f0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  T&C
                </span>
              </Typography>
              <Typography>
                <LocalOffer className={classes.localOffer} />
                EMI starting from ₹{`${Math.ceil(product.price.cost / 12)} `}
                /month{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: "#2874f0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  View Plans{" "}
                  <ArrowForwardIos style={{ width: "10px", height: "10px" }} />
                </span>
              </Typography>
            </Box>
            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Delivery
                  </TableCell>
                  <TableCell style={{ fontWeight: 600 }}>
                    Delivery by {date.toDateString()} | ₹40
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Warranty
                  </TableCell>
                  <TableCell>1 Year Onsite Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Seller
                  </TableCell>
                  <TableCell className={classes.smallText}>
                    <span
                      style={{
                        color: "#2874f0",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      SuperComNet
                    </span>
                    <Typography>GST invoice available</Typography>
                    <Typography>14 Days Return Policy</Typography>
                    <Typography>
                      View more sellers starting from ₹
                      {`${Math.ceil(product.price.cost - 59)} `}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <img
                      src={superCoin}
                      alt="superCoin"
                      style={{ width: 390, cursor: "pointer" }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Description
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DetailView;
