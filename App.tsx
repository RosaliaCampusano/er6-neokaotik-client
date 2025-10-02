import Login from './components/login';
import Splash from './components/splash';
import React, { useState, useEffect } from 'react';
import { AppState } from './helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from './credentials';
import ErrorMessage from './screens/Error';
import Navigation from './components/navigation';
import auth from '@react-native-firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [actualState, setActualState] = useState(AppState.SPLASH_SCREEN);

  useEffect(() => {
    configuereGoogleAuth(user, setUser, setActualState);
  }, []);


  return (
    <>
      {changeScreen(actualState, setActualState, errorMessage, setErrorMessage, setUser, user)}
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
      return (<Login setActualState={setActualState} setErrorMessage={setErrorMessage} setUser={setUser} />);
    case AppState.ERROR:
      return (<ErrorMessage message={errorMessage} setMessage={setErrorMessage} setActualState={setActualState} />);
    case AppState.HOME:
      return <Navigation setActualState={setActualState} setUser={setUser} />;
  }
};

const configuereGoogleAuth = async (user: any, setUser: any, setActualState: any) => {
  await GoogleAuth.configure({
    webClientId: webClientId,
    androidClientId: androidClientId,
  });

  GoogleAuth.getCurrentUser().then(
    async (currentUser) => {
      auth().onAuthStateChanged((user) => {
        if(currentUser) setUser(currentUser);

        setTimeout(() => {
          try {
              if (currentUser) {
                console.log('Current user:', currentUser);
                setActualState(AppState.HOME);
              } else {
                console.log('No user is currently signed in');
                setActualState(AppState.LOGIN);
              }
              return currentUser;

          } catch (error) {
            console.error('Failed to get current user:', error);
            setActualState(AppState.ERROR);
          }
        }, 2000);
      })
    }
    
  );
};

export default App;
