import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { authenticatesSignup, authenticateLogin } from "../../service/Api";

const useStyle = makeStyles({
  component: {
    height: "88vh",
    width: "50vw",
  },
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    background: "#2874f0",
    backgroundPosition: "center 85%",
    backgroundRepeat: "no-repeat",
    height: "88vh",
    width: "40%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
  login: {
    padding: "5px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  loginBtn: {
    textTransform: "none",
    background: "#FB641B",
    color: "#fff",
    height: 48,
    borderRadius: 2,
  },
  requestBtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 48,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  createText: {
    marginTop: "auto",
    textAlign: "center",
    color: "#2874f0",
    fontWeight: 600,
    fontSize: 14,
    cursor: "pointer",
  },
  error: {
    fontSize: 10,
    color: "#ff6161",
    lineHeight: 0,
    marginTop: 10,
    fontWeight: 600,
  },
});

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signupIntialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const Login = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();

  const [toggleaccount, setToggleAccount] = useState(
    accountInitialValues.login
  );
  const [signup, setSignup] = useState(signupIntialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setToggleAccount(accountInitialValues.login);
    showError(false);
  };

  const toggleUserAccount = () => {
    setToggleAccount(accountInitialValues.signup);
  };

  const signupUser = async () => {
    let response = await authenticatesSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      setAccount(login.username);
    }
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <Box className={classes.image}>
            <Typography variant="h5">{toggleaccount.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {toggleaccount.subHeading}
            </Typography>
          </Box>

          {toggleaccount.view === "login" ? (
            <Box className={classes.login}>
              <TextField
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />
              <TextField
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              {error && (
                <Typography className={classes.error}>
                  Invalid username or password
                </Typography>
              )}
              <Typography className={classes.text}>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Typography>
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => loginUser()}
              >
                Login
              </Button>
              <Typography
                className={classes.text}
                style={{ textAlign: "center" }}
              >
                OR
              </Typography>
              <Button variant="contained" className={classes.requestBtn}>
                Request OTP
              </Button>
              <Typography
                className={classes.createText}
                onClick={() => toggleUserAccount()}
              >
                New to Flipkart? Create an account
              </Typography>
            </Box>
          ) : (
            <Box className={classes.login}>
              <TextField
                name="firstname"
                label="Enter Firstname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="lastname"
                label="Enter Lastname"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="username"
                label="Enter Username"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="email"
                label="Enter Email"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="password"
                label="Enter Password"
                onChange={(e) => onInputChange(e)}
              />
              <TextField
                name="phone"
                label="Enter Phone number"
                onChange={(e) => onInputChange(e)}
              />
              <Button
                variant="contained"
                className={classes.loginBtn}
                onClick={() => signupUser()}
              >
                Signup
              </Button>
            </Box>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
