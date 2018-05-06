import React from 'react';
import { withStyles } from "material-ui/styles";
import { connect } from "react-redux";
import { Paper, Typography } from "material-ui";

const mapStateToProps = ({ calc }) => ({
  text: calc.displayText
});

const styles = {
  container: {
    width: "100%",
    padding: 20,
    display: "flex",
    flexDirection: 'row-reverse',
    zIndex: 1
  }
}

const output = ({ classes, text }) => {
  return (
    <Paper className={classes.container} elevation={2}>
      <Typography variant="display2">{text}</Typography>
    </Paper>
  );
}

export default connect(mapStateToProps)(withStyles(styles)(output));