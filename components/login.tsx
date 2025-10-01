import React from 'react';
import {
  Container,
  Image,
  Button,
  Text,
} from '../styled-components/loginStyled';
import { GoogleAuth } from 'react-native-google-auth';
import auth from '@react-native-firebase/auth';
import { sendTokenRequest } from '../api - request/tokenResquest';
import { AppState } from '../helpers/constants';

interface LoginProps {
  setActualState: (state: number) => void;
  setErrorMessage: (message: string) => void;
}

const Login = ({ setActualState, setErrorMessage }) => {
  const SignIn = async () => {
    const response = await GoogleAuth.signIn();

    if (response.type === 'success') {
      const { idToken } = response.data;

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const firebaseUser = await userCredential.user.getIdToken();

      // --- Insert the spinner here ---

      const serverResponse = await sendTokenRequest(firebaseUser);
      console.log(serverResponse);
      if (!serverResponse.ok) {
        setErrorMessage(
          'Opps... This email doesnt exist in Kaotika world. Try again Bastard!',
        );
        setActualState(AppState.ERROR);
      } else {
        const data = await serverResponse.json();
        console.log(data);
      }
    }
    return (
      <Container>
        <Image source={require('../assets/login-screen.jpg')} />
        <Button onPress={SignIn}>
          <Text>Sign In with Google</Text>
        </Button>
      </Container>
    );
  };
};

export default Login;
