import { AppState } from '../helpers/constants';
import { GoogleAuth } from 'react-native-google-auth';

const signOut = async () => {
  try {
    await GoogleAuth.signOut();
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Sign out failed:', error);
  }
};

export const handlerPress = (setActualState: any, setUser: any) => {
  signOut();
  setActualState(AppState.LOGIN);
  setUser(null);
};
