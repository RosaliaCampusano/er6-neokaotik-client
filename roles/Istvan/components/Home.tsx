import React from 'react';
import { IstvanState } from '../../../helpers/constants';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { ImageContainer, urlImage, Button, Text } from '../css/homeStyle';

const Home = () => {
  const { scan, setScanning, setIstvanState, setActualState, setUser } =
    AppProviderContext();

  const handlerScan = () => {
    setIstvanState(IstvanState.SCANNER);
    setScanning(!scan);
  };
  return (
    <>
      <ImageContainer source={urlImage} resizeMode="cover">
        <Button onPress={handlerScan}>
          <Text>Scan QR</Text>
        </Button>
        <Button
          onPress={() => {
            handlerPress(setActualState, setUser);
          }}
        >
          <Text>Log out</Text>
        </Button>
      </ImageContainer>
    </>
  );
};

export default Home;
