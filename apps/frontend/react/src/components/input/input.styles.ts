import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > p {
    text-transform: uppercase;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.secondary};
  }

  > input {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 44px;
    padding: 0 20px;
    border: 1px solid ${(props) => props.theme.colors.grayShade4};
    border-radius: 6px;
    font-size: 14px;
    font-weight: 300;
    background: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.secondary};

    &::placeholder {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: ${(props) => props.theme.colors.grayShade5};
    }
  }
`;
