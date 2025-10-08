import React from 'react';
import {
  ImageContainer,
  urlImage,
  ExitButton,
  Text,
  LabButton,
} from '../css/homeStyle';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';

const Home = () => {
  const { setActualState, setUser } = AppProviderContext();
  return (
    <ImageContainer source={urlImage} resizeMode="cover">
      <LabButton>
        <Text>Lab</Text>
      </LabButton>
      <ExitButton
        onPress={() => {
          handlerPress(setActualState, setUser);
        }}
      >
        <Text>Log out</Text>
      </ExitButton>
    </ImageContainer>
  );
};

export default Home;
