import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

const ImageContainer = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  filter: brightness(2);
`;

const Button = styled.TouchableOpacity`
  width: 50%;
  height: 10%;
  background-color: #0000008a;
  border-radius: 10px;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: 'KochAltschrift';
  font-size: 29px;
`;

const urlImage = require('../../../assets/istvan/home.png');

export { ImageContainer, urlImage, Button, Text };
