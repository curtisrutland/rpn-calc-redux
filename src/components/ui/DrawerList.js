import React from 'react';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem, ListItemIcon, ListItemText
} from 'material-ui/List';
import {
  Link as LinkIcon,
  ContentCopy as ContentCopyIcon
} from "@material-ui/icons";

import copy from "../../helpers/copy";


const styles = {
  list: {
    width: 300,
  }
};

const drawerList = ({ displayText, classes }) => {
  return (
    <div className={classes.list}>
      <List>
        <ListItem button onClick={() => copy(displayText)}>
          <ListItemIcon>
            <ContentCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Copy" />
        </ListItem>
        <ListItem button onClick={() => window.location.href = "https://curtisrutland.github.io/rpn-calc-redux/"}>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="Project Github" />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(drawerList);