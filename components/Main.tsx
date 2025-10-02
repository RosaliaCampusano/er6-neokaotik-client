import Login from './login';
import Splash from './splash';
import React, { useEffect } from 'react';
import { AppState } from '../helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from '../credentials';
import ErrorMessage from '../screens/Error';
import Navigation from '../components/navigation';
import { AppProviderContext } from '../helpers/AppProvider';

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

const Main = () => {
  const {
    user,
    setUser,
    errorMessage,
    setErrorMessage,
    actualState,
    setActualState,
  } = AppProviderContext();

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
};

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
          setUser={setUser}
          setActualState={setActualState}
          setErrorMessage={setErrorMessage}
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

export default Main;
