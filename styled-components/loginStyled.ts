import styled from 'styled-components/native';
import { ImageBackground } from 'react-native';

const Container = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  filter: brightness(2);
`;
const Button = styled.TouchableOpacity`
  width: 45%;
  height: 60px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(39, 75, 63, 1);
  border-radius: 6px;
  margin-left: 1px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 21px;
  text-align: center;
  color: #ffffffff;
  font-family: 'KochAltschrift';
`;

export { Container, Button, Text };
