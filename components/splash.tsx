import React, { useEffect } from 'react';
import { Container, Image } from '../styled-components/splashStyle';
import { AppState } from '../helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';


const Splash = ({ setActualState, user }: any) => {

  useEffect(() => {
    checkInitialAppState(setActualState);
  }, []);

  const checkInitialAppState = async (setActualState: React.Dispatch<React.SetStateAction<number>>) => {
    setTimeout(() => {
      try {
        if (user) {
          console.log('Current user:', user);
          // When is commited user  
          setActualState(AppState.HOME);
        } else {
          console.log('No user is currently signed in');
          setActualState(AppState.LOGIN);
        }
        return user;
      } catch (error) {
        console.error('Failed to get current user:', error);
        setActualState(AppState.ERROR);
      }
    }, 3000);
  };



  const refreshTokens = async () => {
    try {
      const tokens = await GoogleAuth.refreshTokens();
      console.log(`---------------------------------------------------------------\nToken is refreshed, now its tokenID is:\n///////////////////\n${tokens.idToken}\n///////////////////\nAnd expires in:\n///////////////////\n${tokens.expiresAt}\n///////////////////\n${tokens}\n---------------------------------------------------------------\n`);
    } catch (error) {
      console.error('Token refresh failed:', error);
    }
  };

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
