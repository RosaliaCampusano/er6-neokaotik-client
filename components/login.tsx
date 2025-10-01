import React, { useState } from 'react';
import {
  Container,
  Image,
  Button,
  Text,
  SpinnerWrapper,
} from '../styled-components/loginStyled';
import { GoogleAuth } from 'react-native-google-auth';
import auth from '@react-native-firebase/auth';
import { sendTokenRequest } from '../request/tokenResquest';
import { AppState } from '../helpers/constants';
import { CircleFade } from 'react-native-animated-spinkit';

interface LoginProps {
  setActualState: (state: number) => void;
  setErrorMessage: (message: string) => void;
  setUser: any;
}

const Login = ({ setActualState, setErrorMessage, setUser }: LoginProps) => {
  const [loading, setLoading] = useState(false);

  const SignIn = async () => {
    const response = await GoogleAuth.signIn();

    if (response.type === 'success') {
      setLoading(true);
      const { idToken } = response.data;

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential,
      );
      const firebaseUser = await userCredential.user.getIdToken();

      const serverResponse = await sendTokenRequest(firebaseUser);
      console.log(serverResponse);
      if (!serverResponse.ok) {
        setErrorMessage(
          "Oops...This email doesn't exist in Kaotika world. Try again Bastard!",
        );
        setActualState(AppState.ERROR);
      } else {
        const data = await serverResponse.json();
        console.log(data);
        setUser(data);
        setActualState(AppState.HOME);
        setLoading(false);
      }
    }
  };
  return (
    <Container>
      <Image source={require('../assets/login-screen.jpg')} />

      {loading ? (
        <SpinnerWrapper>
          <CircleFade size={55} color="#fff" />
        </SpinnerWrapper>
      ) : (
        <Button onPress={SignIn}>
          <Text>Sign In with Google</Text>
        </Button>
      )}
    </Container>
  );
};

export default Login;
