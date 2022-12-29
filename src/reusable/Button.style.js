import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.backgroundColor || 'green'};
  color: ${props => props.color || 'white'};
`;

const FillBtn = styled.button`
  background-color: ${props => props.backgroundColor || 'red'};
  color: ${props => props.color || 'white'};
`;

export { Button, FillBtn };
