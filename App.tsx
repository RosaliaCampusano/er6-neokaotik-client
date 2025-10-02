import Login from './components/login';
import Splash from './components/splash';
import React, { useState, useEffect } from 'react';
import { AppState } from './helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from './credentials';
import ErrorMessage from './screens/Error';
import Navigation from './components/navigation';

function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [actualState, setActualState] = useState(AppState.SPLASH_SCREEN);

  useEffect(() => {
    configuereGoogleAuth(setUser);
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
      return <Splash setActualState={setActualState} user={user} />;
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

const configuereGoogleAuth = async (setUser: any) => {
  await GoogleAuth.configure({
    webClientId: webClientId,
    androidClientId: androidClientId,
  });

  const currentUser = await GoogleAuth.getCurrentUser();
  
  if (currentUser !== null) {
    setUser(currentUser);
  }
};

export default App;
