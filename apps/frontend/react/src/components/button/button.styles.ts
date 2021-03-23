import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    transition: 0.5s;
  }
`;
