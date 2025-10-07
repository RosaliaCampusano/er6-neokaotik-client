import Login from './login';
import Splash from './splash';
import React, { useEffect } from 'react';
import { AppState } from '../helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from '../credentials';
import ErrorMessage from './error';
import Navigation from './navigation';
import auth from '@react-native-firebase/auth';
import { sendTokenRequest } from '../request/tokenResquest';
import { AppProviderContext } from '../helpers/AppProvider';

function Main() {
  const { setUser, actualState, setActualState } = AppProviderContext();

  useEffect(() => {
    configuereGoogleAuth(setUser, setActualState);
  }, []);

  return <>{changeScreen(actualState)}</>;
}

const changeScreen = (actualState: number) => {
  switch (actualState) {
    case AppState.SPLASH_SCREEN:
      return <Splash />;
    case AppState.LOGIN:
      return <Login />;
    case AppState.ERROR:
      return <ErrorMessage />;
    case AppState.HOME:
      return <Navigation />;
  }
};

const configuereGoogleAuth = async (setUser: any, setActualState: any) => {
  await GoogleAuth.configure({
    webClientId: webClientId,
    androidClientId: androidClientId,
  });

  GoogleAuth.getCurrentUser()
    .then(async currentUser => {
      if (currentUser) {
        auth().onAuthStateChanged(async firebaseUser => {
          if (firebaseUser) {
            const firebaseToken = await firebaseUser.getIdToken();
            const serverResponse = await sendTokenRequest(firebaseToken);

            if (!serverResponse.ok) {
              setUser(null);
              setActualState(AppState.LOGIN);
              return;
            }

            const data = await serverResponse.json();
            console.log('User data from Kaotika:', data);
            setUser(data);
            setActualState(AppState.HOME);
          } else {
            console.log('No Firebase user signed in.');
            setUser(null);
            setActualState(AppState.LOGIN);
          }
        });
      } else {
        setUser(null);
        setActualState(AppState.LOGIN);
      }
    })
    .catch(error => {
      console.error('Error with Google Auth:', error);
      setUser(null);
      setActualState(AppState.LOGIN);
    });
};

export default Main;
