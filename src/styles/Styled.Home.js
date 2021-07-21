import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerHome = styled.div`
  flex-direction: column;
  margin: auto;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 0 0 30px 0;
`;
export const ImgSlider = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 3px rgba(0, 0, 0, 0.2);
`;

export const DivSlider = styled.div`
  width: 90%;
  padding: 20px 15px;
  display: flex;
  justify-content: center;
`;

export const ProdutosSlider = styled.div`
  width: ${props => props.widthScreen};
  height: 100%;
  z-index: 1;
`;
