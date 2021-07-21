import styled from 'styled-components';
export const Header = styled.header`
  height: ${props => props.acaoHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  background: ${props => props.acao};
  transition: 0.2s;
  top: 0;
  z-index: 2;
`;

export const NavLink = styled.p`
  text-decoration: none;
  color: white;
`;
