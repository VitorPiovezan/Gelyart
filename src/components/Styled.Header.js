import styled from 'styled-components';

export const Header = styled.header`
  height: ${props => props.acaoHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  background: ${props => props.acao};
  transition: 0.2s;
`;
