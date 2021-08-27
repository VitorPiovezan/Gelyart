import styled from 'styled-components';
export const FT = styled.div`
  width: 900px;
  min-width: 300px;
  display: flex;
  align-items: ${props => props.items};
  justify-content: space-between;
  color: white;
  padding: 1px 40px;
  margin-bottom: 20px;
  flex-direction: ${props => props.flex};
`;

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
