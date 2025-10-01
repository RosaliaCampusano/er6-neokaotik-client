import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 70%;
  height: 65%;
  filter: brightness(1.5);
  position: absolute;
`;

const Text = styled.Text`
  position: absolute;
  top: 40%;
  left: 30%;
  right: 10%;
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  color: black;
  text-shadow: 1px 1px 3px black;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  top: 61%;
  width: 90px;
  height: 40px;
  background-color: #000000ff;
  border-radius: 10px;
`;

const ButtonText = styled(Text)`
  color: rgb(177 164 144);
  text-align: center;
  font-weight: bold;
  margin-top: -6px;
  margin-left: -16px;
`;

export { Container, Button, ButtonText, Image, Text };
