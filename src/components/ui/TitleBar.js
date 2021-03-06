import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withStyles } from 'material-ui/styles';
import {
  AppBar, Toolbar, Typography,
  IconButton, Button
} from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";

import * as UiActions from "../../redux/ui/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(UiActions, dispatch)
});

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    textTransform: "none",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const titleBar = ({ classes, actions }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={8}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={actions.toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Button color="inherit" size="large" onClick={actions.toggleDrawer}>
            <Typography variant="title" color="inherit" className={classes.title}>
              RPN Calc Redux
          </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const styledTitleBar = withStyles(styles)(titleBar);
export default connect(null, mapDispatchToProps)(styledTitleBar);