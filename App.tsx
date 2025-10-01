import Login from './components/login';
import Splash from './components/splash';
import React, { useState, useEffect } from 'react';
import { AppState } from './helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from './credentials';
import ErrorMessage from './screens/Error';

function App() {
  useEffect(() => {
    configuereGoogleAuth();
  }, []);

  const [actualState, setActualState] = useState(AppState.LOGIN);
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <>
      {changeScreen(actualState, setActualState, errorMessage, setErrorMessage)}
    </>
  );
}

const changeScreen = (
  actualState: number,
  setActualState: any,
  errorMessage: string,
  setErrorMessage: any,
) => {
  switch (actualState) {
    case AppState.SPLASH_SCREEN:
      return <Splash setActualState={setActualState} />;
    case AppState.LOGIN:
      return (
        <Login
          setActualState={setActualState}
          setErrorMessage={setErrorMessage}
        />
      );
    case AppState.ERROR:
      return (
        <ErrorMessage message={errorMessage} setMessage={setErrorMessage} />
      );
  }
};

const configuereGoogleAuth = async () => {
  await GoogleAuth.configure({
    webClientId: webClientId,
    androidClientId: androidClientId,
  });
};

export default App;
