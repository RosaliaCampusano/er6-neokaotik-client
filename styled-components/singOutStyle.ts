import styled from 'styled-components/native';

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
  top: 5px;
  font-family: 'KochAltschrift';
  font-size: 21px;
`;

export { Button, Text };
