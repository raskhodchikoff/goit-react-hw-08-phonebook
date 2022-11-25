import styled from 'styled-components';

export const Username = styled.p`
  font-size: ${p => p.theme.fontSizes[3]}px;
  margin-right: 12px;
  span {
    font-weight: 700;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[1]}px;
  padding: 4px;
  border: ${p => `${p.theme.borders.m} ${p.theme.colors.greyBorder}`};
  border-radius: ${p => p.theme.radii.s};
  box-shadow: ${p => p.theme.shadows.shadow};

  :hover {
    background-color: ${p => p.theme.colors.btnHover};
    color: ${p => p.theme.colors.blackFont};
  }
`;
