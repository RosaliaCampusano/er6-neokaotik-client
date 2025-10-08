import React from 'react';
import {
  ImageContainer,
  urlImage,
  ExitButton,
  Text,
  LabButton,
} from '../css/style';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { MortimerState } from '../../../helpers/constants';

const Home = () => {
  const { setActualState, setUser, setMortimerState } = AppProviderContext();
  return (
    <ImageContainer source={urlImage} resizeMode="cover">
      <LabButton
        onPress={() => {
          setMortimerState(MortimerState.LAB);
        }}
      >
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
