import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    paddingTop: "100px",
    display: "flex",
    flexDirection: "column",
    color: "#2d2383",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[700],
    "&:hover": {
      backgroundColor: yellow[500],
    },
  },
}))(Button);

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const classes = useStyles();

  const [register, setRegister] = useState(initState);

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <div
      style={{
        background: "whitesmoke",
        height: "100vh",
        color: "#2d2383",
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SignUp Here
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <label>Firstname</label>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  autoFocus
                  placeholder="Enter firstname"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label>Lastname</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  placeholder="Enter lastname"
                  name="lastName"
                  autoComplete="lname"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <label>Email</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  placeholder="Enter email "
                  name="email"
                  autoComplete="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <label>Password</label>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Remember Me"
                />
              </Grid>
            </Grid>
            <ColorButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              Sign Up
            </ColorButton>
          </form>
        </div>
      </Container>
    </div>
  );
}
