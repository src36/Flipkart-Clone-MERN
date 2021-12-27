import React, { useState } from "react";
import { Typography, Menu, MenuItem, makeStyles } from "@material-ui/core";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";

const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    fontSize: 14,
    marginLeft: 20,
  },
});

const Profile = ({ account, setAccount }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Typography
        style={{ marginTop: "4px", cursor: "pointer" }}
        onClick={handleClick}
      >
        {account}
      </Typography>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
