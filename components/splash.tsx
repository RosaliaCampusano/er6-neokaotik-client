import React, { useEffect } from 'react';
import { Container, Image } from '../styled-components/splashStyle';
import { AppState } from '../helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';


const Splash = () => {

  return (
    <Container>
      <Image source={require('../assets/splash-screen.jpg')} />
    </Container>
  );
};


const getTokens = async () => {
  console.log("Getting the old token");
  try {
    const tokens = await GoogleAuth.getTokens();
    console.log('Token:', tokens);
    return tokens;
  } catch (error) {
    console.error('Failed to get tokens:', error);
  }

};

export default Splash;
