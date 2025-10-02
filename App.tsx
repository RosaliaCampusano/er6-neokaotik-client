import Login from './components/login';
import Splash from './components/splash';
import React, { useState, useEffect } from 'react';
import { AppState } from './helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from './credentials';
import ErrorMessage from './screens/Error';
import Navigation from './components/navigation';
import auth from '@react-native-firebase/auth';
import { sendTokenRequest } from './request/tokenResquest';

function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [actualState, setActualState] = useState(AppState.SPLASH_SCREEN);

  useEffect(() => {
    configuereGoogleAuth(user, setUser, setActualState);
  }, []);

  return (
    <>
      {changeScreen(
        actualState,
        setActualState,
        errorMessage,
        setErrorMessage,
        setUser,
        user,
      )}
    </>
  );
}

const changeScreen = (
  actualState: number,
  setActualState: any,
  errorMessage: string,
  setErrorMessage: any,
  setUser: any,
  user: any,
) => {
  switch (actualState) {
    case AppState.SPLASH_SCREEN:
      return <Splash />;
    case AppState.LOGIN:
      return (
        <Login
          setActualState={setActualState}
          setErrorMessage={setErrorMessage}
          setUser={setUser}
        />
      );
    case AppState.ERROR:
      return (
        <ErrorMessage
          message={errorMessage}
          setMessage={setErrorMessage}
          setActualState={setActualState}
        />
      );
    case AppState.HOME:
      return <Navigation setActualState={setActualState} setUser={setUser} />;
  }
};

const configuereGoogleAuth = async (
  user: any,
  setUser: any,
  setActualState: any,
) => {
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

export default App;
