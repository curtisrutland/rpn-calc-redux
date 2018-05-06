import React from 'react';
import { withStyles } from "material-ui/styles";
import Card, { CardContent } from "material-ui/Card";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Close as CloseIcon,
  ArrowBack as ArrowBackIcon
} from "@material-ui/icons";
import Row from './Row.';
import Button from './Button';
import { DIVIDE } from '../../redux/calculator/binaryOperators';

const styles = {
  card: {
    width: "100%",
    height: "100%"
  },
  content: {
    height: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    padding: "0 !important"
  }
};

const buttonGrid = ({ classes, actions }) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Row>
          <Button icon={<ArrowBackIcon />} backspace />
          <Button text="C" clear />
          <Button text="Enter" enter />
        </Row>
        <Row>
          <Button number={7} />
          <Button number={8} />
          <Button number={9} />
          <Button text="÷" operator={DIVIDE} />
        </Row>
        <Row>
          <Button number={4} />
          <Button number={5} />
          <Button number={6} />
          <Button icon={<CloseIcon />} />
        </Row>
        <Row>
          <Button number={1} />
          <Button number={2} />
          <Button number={3} />
          <Button icon={<RemoveIcon />} />
        </Row>
        <Row>
          <Button text="±" />
          <Button number={0} />
          <Button text="." decimal />
          <Button icon={<AddIcon />} />
        </Row>
      </CardContent>
    </Card>
  )
};

export default withStyles(styles)(buttonGrid);