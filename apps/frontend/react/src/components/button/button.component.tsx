// Dependencies
import React from 'react';

// Utils
import { IButton } from './button.interface';

// Assets
import { Container } from './button.styles';

const Button: React.FC<IButton> = ({ text, type, handleClick }: IButton) => (
  <Container className="react-button" onClick={handleClick} type={type}>
    <p>{text}</p>
  </Container>
);

export default Button;
