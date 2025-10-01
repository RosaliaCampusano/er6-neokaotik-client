import React from 'react';
import { Container, Image } from '../styled-components/splashStyle';
import { AppState } from '../helpers/constants';

const Splash = ({ setActualState, user }: any) => {
  return (
    <Container>
      <Image source={require('../assets/splash-screen.jpg')} />
      {user === null ? setActualState(AppState.LOGIN) : ''}
    </Container>
  );
};

export default Splash;
