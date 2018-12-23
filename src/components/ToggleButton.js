import React from 'react';
import Button from './Button';
import ThemeContext from '../contexts/ThemeContext';

const ToggleButton = ({
  onClick = () => {},
  children
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Button
        onClick={onClick}
        backgroundColor={theme.linkColor}
        textColor={theme.backgroundColor}
        styleButton={{
          position: 'absolute',
          top: '10px',
          left: '10px'
        }}
      >
        Change theme
      </Button>
    )}
    </ThemeContext.Consumer>
);

export default ToggleButton;
