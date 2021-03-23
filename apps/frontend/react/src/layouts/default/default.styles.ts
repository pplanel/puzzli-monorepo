import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.grayShade8};
  position: fixed;

  > div.navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    height: 100%;
    padding: 12px 8px;
    background-color: ${(props) => props.theme.colors.grayShade6};
  }

  > div.page {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    padding: 20px 48px 64px;
  }
`;

interface IMenuItem {
  selected?: boolean
}

export const Item = styled.div<IMenuItem>`
  margin-bottom: 4px;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;

  ${({ selected }) =>
    selected ? css`
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.white};
    ` : css`
      :hover {
        background-color: ${(props) => props.theme.colors.grayShade8};
        transition: 0.4s;
      }
    `}
`
