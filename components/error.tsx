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
import { AppProviderContext } from '../helpers/AppProvider';

const ErrorMessage = () => {
  const { errorMessage, setErrorMessage, setActualState } =
    AppProviderContext();

  const handlerPress = () => {
    setErrorMessage('');
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
        <Text numberOfLines={4}>{errorMessage}</Text>
      </ImageWrapper>
      <Button onPress={handlerPress}>
        <ButtonText>Dismiss</ButtonText>
      </Button>
    </Container>
  );
};

export default ErrorMessage;
