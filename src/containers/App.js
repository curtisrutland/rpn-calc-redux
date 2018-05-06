import React, { Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import withWidth from 'material-ui/utils/withWidth';
import compose from 'recompose/compose';
import withRootTheme from "../theme/withRootTheme";

import SideDrawer from '../components/ui/SideDrawer';
import Calculator from '../components/calculator/Calculator';
import Hidden from 'material-ui/Hidden';
import TitleBar from '../components/ui/TitleBar';

const styles = {
  root: {
    //paddingTop: 80,
    padding: 0,
    width: '100%',
    height: "100%",
    maxWidth: 900,
    margin: "0 auto",
  }
};

const app = ({ classes }) => {
  return (

    <Fragment>
      <SideDrawer />
      <div className={classes.root}>
        <Hidden xsDown>
          <TitleBar />
        </Hidden>
        <Calculator />
      </div>
    </Fragment>
  )
};

const styledApp = compose(withStyles(styles), withWidth())(app);
export default withRootTheme(styledApp);