import React, { useEffect } from 'react';
import {
  Container,
  Image,
  Button,
  Text,
} from '../styled-components/loginStyled';
import { GoogleAuth } from 'react-native-google-auth';
import { webClientId, androidClientId } from '../credentials';
import auth from '@react-native-firebase/auth';

const Login = () => {
  useEffect(() => {
    configuereGoogleAuth();
  }, []);

  return (
    <Container>
      <Image source={require('../assets/login-screen.jpg')} />
      <Button onPress={SignIn}>
        <Text>Sign In with Google</Text>
      </Button>
    </Container>
  );
};

const configuereGoogleAuth = async () => {
  await GoogleAuth.configure({
    webClientId: webClientId,
    androidClientId: androidClientId,
  });
};

const SignIn = async () => {
  const response = await GoogleAuth.signIn();

  if (response.type === 'success') {
    const { idToken } = response.data;

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const userCredential = await auth().signInWithCredential(googleCredential);

    const firebaseUser = await userCredential.user.getIdToken();

    // --- Insert the spinner here ---
  }
};

export default Login;
