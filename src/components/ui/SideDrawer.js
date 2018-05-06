import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';

import * as UiActions from "../../redux/ui/actions";

import DrawerList from "./DrawerList";

const styles = {
  list: {
    width: 300,
  }
};

const mapStateToProps = ({ ui, calc }) => {
  const { drawerOpen } = ui;
  const { displayText } = calc;
  return { drawerOpen, displayText };
};

const mapDispatchtoProps = dispatch => ({
  uiActions: bindActionCreators(UiActions, dispatch),
});

const sideDrawer = ({ drawerOpen, uiActions, todoActions, classes, displayText }) => {
  return (
    <SwipeableDrawer open={drawerOpen} onOpen={uiActions.openDrawer} onClose={uiActions.closeDrawer}>
      <div tabIndex={0} role="button" onClick={uiActions.closeDrawer} onKeyDown={uiActions.closeDrawer}>
        <DrawerList displayText={displayText} />
      </div>
    </SwipeableDrawer >
  )
};

const styledSideDrawer = withStyles(styles)(sideDrawer);

export default connect(mapStateToProps, mapDispatchtoProps)(styledSideDrawer);