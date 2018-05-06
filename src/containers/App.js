import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import withRootTheme from "../theme/withRootTheme";
import TitleBar from '../components/ui/TitleBar';
import SideDrawer from '../components/ui/SideDrawer';

const styles = {
  root: {
    root: {
      paddingTop: 80,
      width: '95%',
      maxWidth: 900,
      margin: "0 auto",
    }
  }
};

const app = ({ classes }) => {
  return (
    <Fragment>
      <TitleBar />
      <SideDrawer />
      <div className={classes.root}>
        Content Goes Here
    </div>
    </Fragment>
  )
};

export default withRootTheme(withStyles(styles)(app));