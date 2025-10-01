import React from 'react';
import {
  Container,
  Button,
  Image,
  Text,
  ButtonText,
} from '../styled-components/errorStyled';

interface ErrorMessageProps {
  message: string;
  setMessage(message: string): void;
}

const ErrorMessage = ({ message, setMessage }: ErrorMessageProps) => {
  const handlerPress = () => {
    setMessage('');
  };

  return (
    <Container
      source={require('../assets/login-screen.jpg')}
      resizeMode="cover"
    >
      <Image
        source={require('../assets/error-message.png')}
        resizeMode="contain"
      />
      <Text>{message}</Text>
      <Button onPress={handlerPress}>
        <ButtonText>Discard</ButtonText>
      </Button>
    </Container>
  );
};

export default ErrorMessage;
