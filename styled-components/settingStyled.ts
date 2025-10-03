import styled from 'styled-components/native';

const View = styled.View`
  align-items: center;
  height: 500px;
`;

const Button = styled.TouchableOpacity`
  position: relative;
  width: 90px;
  height: 40px;
  background-color: #000000c3;
  border-radius: 10px;
  margin-left: 1px;
  margin-top: 50p;
`;

const Text = styled.Text`
  color: #ffffff;
  text-align: center;
  top: 10px;
  font-family: 'KochAltschrift';
  font-size: 21px;
`;

export { View, Button, Text };
