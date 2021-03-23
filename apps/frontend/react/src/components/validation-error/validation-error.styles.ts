import styled from 'styled-components';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-top: 2px;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: ${(props) => props.theme.colors.red};
  }
`;

export const Icon = styled(AiOutlineExclamationCircle)`
  width: 20px;
  margin-right: 4px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.red};
`;
