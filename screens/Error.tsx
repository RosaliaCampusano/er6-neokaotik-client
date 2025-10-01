import React from 'react';
import {
  Container,
  Button,
  Image,
  Text,
  ButtonText,
  ImageWrapper,
} from '../styled-components/errorStyled';
import { AppState } from '../helpers/constants';

interface ErrorMessageProps {
  message: string;
  setMessage(message: string): void;
  setActualState(state: number): void;
}

const ErrorMessage = ({
  message,
  setMessage,
  setActualState,
}: ErrorMessageProps) => {
  const handlerPress = () => {
    setMessage('');
    setActualState(AppState.LOGIN);
  };

  return (
    <Container
      source={require('../assets/login-screen.jpg')}
      resizeMode="cover"
    >
      <ImageWrapper>
        <Image
          source={require('../assets/error-message.png')}
          resizeMode="contain"
        />
        <Text numberOfLines={4}>{message}</Text>
      </ImageWrapper>
      <Button onPress={handlerPress}>
        <ButtonText>Dismiss</ButtonText>
      </Button>
    </Container>
  );
};

export default ErrorMessage;
