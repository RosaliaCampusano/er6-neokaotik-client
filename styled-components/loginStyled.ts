import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

const Container = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  filter: brightness(2);
`;
const Button = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  position: relative;
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

export { Container, Button, Text };
