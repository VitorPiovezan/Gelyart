import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

export const LinkHeader = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  transition: 0.2s;
  font-size: ${props => props.mudaHeader};
  &:hover {
    background-color: #286198;
    border-radius: 10px;
    padding: 10px;
  }
`;
