import styled from 'styled-components/native';

const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  filter: brightness(2);
`;

export { Container, Image };
