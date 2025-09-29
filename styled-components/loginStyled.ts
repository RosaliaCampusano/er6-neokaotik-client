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

const Button = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  position: absolute;
  top: 300px;
  background-color: transparent;
  border: 5px solid white;
  border-radius: 10px;
  margin-left: 1px;
`;

const Text = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ffffffff;
  position: absolute;
  left: 15px;
  top: 15px;
`;

export { Container, Image, Button, Text };
