import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";

//components
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";

const useStyle = makeStyles((theme) => ({
  header: {
    background: "#2874f0",
    height: 55,
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  logo: {
    width: 75,
  },
  container: {
    display: "flex",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
  subURL: {
    width: 10,
    height: 10,
    marginLeft: 4,
  },
  list: {
    width: 250,
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  headerButtons: {
    margin: "0 5% 0 auto",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);
const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box className={classes.list} onClick={handleClose}>
      <List>
        <ListItem button>
          <HeaderButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <IconButton
          color="inherit"
          className={classes.menuButton}
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Link to="/" className={classes.component}>
          <img src={logoURL} alt="logo" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#ffE500" }}>
                plus
              </Box>
            </Typography>
            <img src={subURL} alt="plus" className={classes.subURL} />
          </Box>
        </Link>
        <SearchBar />
        <span className={classes.headerButtons}>
          <HeaderButton />
        </span>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
