import React from 'react';
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import { Button, Typography } from "material-ui";

import * as Actions from "../../redux/calculator/actions";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});


const styles = theme => ({
  button: {
    flex: 1
  }
});

const button = ({
  classes, 
  text, 
  actions,
  display = "display1",
  icon = null, 
  number = null,
  clear = false, 
  backspace = false,
  decimal = false,
  enter = false,
  operator = null
}) => {
  let child = text;
  if (icon) child = icon;
  else if (number != null) child = number.toString();

  let onClick = null;
  if (clear) onClick = () => actions.clearPressed();
  else if (backspace) onClick = () => actions.backspacePressed();
  else if (decimal) onClick = () => actions.decimalPressed();
  else if (enter) onClick = () => actions.enterPressed();
  else if (number != null) onClick = () => actions.numberPressed(number);
  else if (operator != null) onClick = () => actions.binaryOperatorPressed(operator);

  return (
    <Button color="default" className={classes.button} onClick={onClick}>
      <Typography variant={display}>
        {child}
      </Typography>
    </Button>
  )
};

button.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
  icon: PropTypes.element,
  clear: PropTypes.bool,
  backspace: PropTypes.bool
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(button));