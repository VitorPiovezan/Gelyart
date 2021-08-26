import styled from 'styled-components';

export const InputLong = styled.input`
  width: ${props => props.acao};
  padding: 10px;
  font-size: 12pt;
  border-radius: 10px;
  border: 0 none;
  border: 1px solid #282828;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export const LabelLong = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: ${props => props.acao};
`;

export const LabelShort = styled.label`
  display: flex;
  flex-direction: ${props => props.acao2};
  text-align: left;
  width: ${props => props.acao};
`;

export const InputShort = styled.input`
  width: ${props => props.acao};
  padding: 10px;
  font-size: 12pt;
  border-radius: 10px;
  border: 0 none;
  border: 1px solid #282828;
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
