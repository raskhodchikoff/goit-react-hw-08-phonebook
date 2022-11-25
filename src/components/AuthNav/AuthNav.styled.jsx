import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const EnterNav = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  cursor: pointer;
  color: ${p => p.theme.colors.blackFont};

  :hover {
    color: ${p => p.theme.colors.greyBorder};
  }
  &.active {
    color: ${p => p.theme.colors.greyBorder};
  }
`;
