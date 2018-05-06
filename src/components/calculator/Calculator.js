import React from 'react';
import { withStyles } from "material-ui/styles";
import Output from './Output';
import ButtonGrid from './ButtonGrid';


const styles = theme => {
  return {
    root: {
      maxHeight: 1000,
      height: "100%",
      display: "flex",
      flexFlow: "column nowrap"
    }
  }
};

const calculator = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Output />
      <ButtonGrid />
    </div>
  )
};

export default withStyles(styles)(calculator);