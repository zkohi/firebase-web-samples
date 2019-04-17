import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { VerifiedUserOutlined } from "@material-ui/icons";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import { loginMicrosoft, signOut } from "../hooks/auth";

const styles = () => ({});

const Login = () => {
  return (
    <main className={""}>
      <Paper className={""}>
        <VerifiedUserOutlined />
        <Typography component="h1" variant="h5">
          Hello
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={login}
          className={""}
        >
          login
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          onClick={logout}
          className={""}
        >
          logout
        </Button>
      </Paper>
    </main>
  );
};

const login = async () => {
  try {
    await loginMicrosoft();
  } catch (e) {
    alert(e.message);
  }
};

const logout = async () => {
  try {
    await signOut();
  } catch (e) {
    alert(e.message);
  }
};
export default withStyles(styles)(Login);
