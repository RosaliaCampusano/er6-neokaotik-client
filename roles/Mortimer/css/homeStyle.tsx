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

const LabButton = styled.TouchableOpacity`
  width: 25%;
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-right: 58%;
  margin-top: 15%;
`;

const ExitButton = styled.TouchableOpacity`
  width: 40%;
  height: 20%;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-left: 65%;
`;

const Text = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: 'KochAltschrift';
  font-size: 29px;
`;

const urlImage = require('../../../assets/mortimer/home.png');

export { ImageContainer, urlImage, ExitButton, Text, LabButton };
