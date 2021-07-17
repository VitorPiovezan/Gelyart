import styled from 'styled-components';
export const FT = styled.div`
  width: 900px;
  min-width: 300px;
  display: flex;
  align-items: ${props => props.items};
  justify-content: space-between;
  color: white;
  padding: 30px 40px;
  flex-direction: ${props => props.flex};
`;
