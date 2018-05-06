import React from 'react';
import { withStyles } from "material-ui/styles";


const styles = {
  root: {
    flex: 1,
    display: "flex",
    flexFlow: "row nowrap"
  }
};

const row = ({ classes, children }) => {
  return (
    <div className={classes.root}>
      {children}
    </div>
  )
};

export default withStyles(styles)(row);