import { FieldError } from 'react-hook-form'

interface IError {
  message: string
}

export interface IInput {
  name: string
  errors?: IError | FieldError
  smallCaps: string
  type: 'text' | 'password'
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}
