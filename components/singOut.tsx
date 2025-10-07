import React from 'react';
import { AppState } from '../helpers/constants';
import { AppProviderContext } from '../helpers/AppProvider';
import { Text, Button } from '../styled-components/singOutStyle';
import { GoogleAuth } from 'react-native-google-auth';

const signOut = async () => {
  try {
    await GoogleAuth.signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Sign out failed:', error);
  }
};

const SingOut = () => {
  const { setActualState, setUser } = AppProviderContext();
  const handlerPress = () => {
    signOut();
    setActualState(AppState.LOGIN);
    setUser(null);
  };
  return (
    <Button onPress={handlerPress}>
      <Text>Log out</Text>
    </Button>
  );
};

export default SingOut;
