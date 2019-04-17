import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { VerifiedUserOutlined } from "@material-ui/icons";
import { Typography, Paper, Button } from "@material-ui/core";

const styles = () => ({});

const Home = () => {
  return (
    <main className={""}>
      <Paper className={""}>
        <VerifiedUserOutlined />
        <Typography component="h1">Hello</Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          // @ts-ignore
          component={Link}
          to="/login"
          className={""}
        >
          test
        </Button>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Home);
