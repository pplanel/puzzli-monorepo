// Dependencies
import React from 'react';

// Utils
import { IInput } from './input.interface';

// Compopnents
import ValidationError from '../validation-error';

// Assets
import { Container } from './input.styles';

const Input = React.forwardRef<HTMLInputElement, IInput>(
  ({ smallCaps, name, errors, type, handleInput }: IInput, ref) => (
    <Container className="react-input">
      <p>{smallCaps}</p>
      <input
        name={name}
        type={type}
        onChange={(event) => {
          handleInput(event);
        }}
        ref={ref}
      />
      {errors?.message && <ValidationError text={`${errors.message}`} />}
    </Container>
  ),
);

export default Input;
