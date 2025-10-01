import React from 'react';
import { Container, Image } from '../styled-components/splashStyle';
import { AppState } from '../helpers/constants';

const Splash = ({ setActualState }: any) => {
  return (
    <Container>
      <Image source={require('../assets/splash-screen.jpg')} />
      {setActualState(AppState.LOGIN)}
    </Container>
  );
};

export default Splash;
