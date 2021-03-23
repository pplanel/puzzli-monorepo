import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  background: ${(props) => props.theme.colors.grayShade8};

  > form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    padding: 40px;
    border: 1px solid ${(props) => props.theme.colors.grayShade7};
    border-radius: 6px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    background: ${(props) => props.theme.colors.white};

    > .react-button {
      margin-top: 32px;
    }

    > .react-input + .react-input {
      margin-top: 24px;
    }

    > .react-validation-error {
      margin: 12px auto 0;
    }
  }
`;
