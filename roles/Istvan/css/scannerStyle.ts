import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: #000000aa;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Overlay = styled.View`
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 10;
`;

export { Container, Button, Text, Overlay };
