import React from 'react';

import classes from './Button.module.css';

// this button component is used by ErrorModal and AddUser
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
