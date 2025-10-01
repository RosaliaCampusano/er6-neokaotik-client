import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

const Container = styled(ImageBackground)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.View`
  width: 70%;
  height: 65%;
  position: relative;
  justify-content: center;
  align-items: center;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  filter: brightness(1.5);
  position: absolute;
  top: 0;
  left: 0;
`;

const Text = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-shadow: 1px 1px 3px black;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  width: 80%;
`;

const Button = styled.TouchableOpacity`
  position: absolute;
  top: 61%;
  width: 90px;
  height: 40px;
  background-color: #000000ff;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: rgb(177 164 144);
  text-align: center;
  font-weight: bold;
  margin-top: 10px;
  margin-left: -5px;
`;

export { Container, Button, ButtonText, Image, ImageWrapper, Text };
