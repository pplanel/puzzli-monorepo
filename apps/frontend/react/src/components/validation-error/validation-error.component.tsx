// Dependencies
import React from 'react';

// Utils
import { IValidationError } from './validation-error.interface';

// Assets
import { Container, Icon } from './validation-error.styles';

const ValidationError: React.FC<IValidationError> = ({
  text,
}: IValidationError) => (
  <Container className="react-validation-error">
    <Icon />
    <p>{text}</p>
  </Container>
);

export default ValidationError;
