import styled from 'styled-components';

export const CardProduct = styled.div`
   border-radius: 5px;
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-left: 15px;
   min-width: 200px;
   width: ${props => props.acao};
   box-shadow: 3px 3px 4px 1px rgba(0, 0, 0, 0.2);
  &:hover img {
   transition: .5s;
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
}
  }
`;

export const ImgProduct = styled.img`
  width: 170px;
  transition: 0.5s;
  object-fit: 'cover';
`;

export const ProdutosList = styled.div`
  background-color: #dfdfdf;
  padding: ${props => props.padding};
  transition: 0.2s;
  height: ${props => props.acao};
  overflow: ${props => props.overflow};
  color: ${props => props.color};
`;
