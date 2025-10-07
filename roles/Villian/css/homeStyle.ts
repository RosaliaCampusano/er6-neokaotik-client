import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

const ImageContainer = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 50%;
  height: 10%;
  background-color: #000000c3;
  border-radius: 10px;
`;

const Text = styled.Text`
  color: #ffffff;
  text-align: center;
  top: 15%;
  font-family: 'KochAltschrift';
  font-size: 29px;
`;

const urlImage = require('../../../assets/villian/Home.png');

export { ImageContainer, urlImage, Button, Text };
