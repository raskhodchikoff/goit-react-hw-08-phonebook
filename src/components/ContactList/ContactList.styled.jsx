import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 48px;
  &:not(:last-child) {
    margin-bottom: 10px;
    padding-bottom: 0px;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 3px;
  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.shadow};

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
    color: ${p => p.theme.colors.blackFont};
  }
`;
