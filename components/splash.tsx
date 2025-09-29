import React from 'react';
import { Container, Image } from '../styled-components/splashStyle';

const Splash = () => {
  return (
    <Container>
      <Image source={require('../assets/splash-screen.jpg')} />
    </Container>
  );
};

export default Splash;
