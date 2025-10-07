import styled from 'styled-components/native';

const LabDoor = require('../../../assets/acolyte/lab-door.png');
const LabImage = require('../../../assets/acolyte/lab.png');

const Button = styled.TouchableOpacity`
  width: 50%;
  height: 10%;
  background-color: rgba(3, 10, 9);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #ffffff;
  text-align: center;
  font-family: 'KochAltschrift';
  font-size: 29px;
`;

export { LabDoor, LabImage, Button, Text };
