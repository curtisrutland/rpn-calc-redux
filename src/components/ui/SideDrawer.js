import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import List, {
  ListItem, ListItemIcon, ListItemText
} from 'material-ui/List';
import {
  Link as LinkIcon
} from "@material-ui/icons";

import * as UiActions from "../../redux/ui/actions";

const styles = {
  list: {
    width: 300,
  }
};

const mapStateToProps = ({ ui }) => {
  const { drawerOpen } = ui;
  return { drawerOpen };
};

const mapDispatchtoProps = dispatch => ({
  uiActions: bindActionCreators(UiActions, dispatch),
});

const sideDrawer = ({ drawerOpen, uiActions, todoActions, classes }) => {
  return (
    <SwipeableDrawer open={drawerOpen} onOpen={uiActions.openDrawer} onClose={uiActions.closeDrawer}>
      <div tabIndex={0} role="button" onClick={uiActions.closeDrawer} onKeyDown={uiActions.closeDrawer}>
        <div className={classes.list}>
          <List>
            <ListItem button onClick={() => window.location.href = "https://curtisrutland.github.io/rpn-calc-redux/"}>
              <ListItemIcon>
                <LinkIcon />
              </ListItemIcon>
              <ListItemText primary="Project Github" />
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  )
};

const styledSideDrawer = withStyles(styles)(sideDrawer);

export default connect(mapStateToProps, mapDispatchtoProps)(styledSideDrawer);