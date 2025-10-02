import React from 'react';
import { AppState } from '../helpers/constants';
import { View, Text, Button } from '../styled-components/settingStyled';
import { GoogleAuth } from 'react-native-google-auth';

const signOut = async () => {
  try {
    await GoogleAuth.signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Sign out failed:', error);
  }
};

const Settings = ({ setActualState, setUser }: any) => {
  const handlerPress = () => {
    signOut();
    setActualState(AppState.LOGIN);
    setUser(null);
  };
  return (
    <View>
      <Button onPress={handlerPress}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
};

export default Settings;
