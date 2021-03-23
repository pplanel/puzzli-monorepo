export interface IButton {
  text: string;
  type: 'button' | 'reset' | 'submit'
  handleClick?: () => void
}
