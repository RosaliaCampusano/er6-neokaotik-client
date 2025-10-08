import React from 'react';
import QRScanner from './Scanner';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { ImageContainer, urlImage, Button, Text } from '../css/homeStyle';

const Home = () => {
  const { scan, setScanning, setActualState, setUser } = AppProviderContext();

  const handlerScan = () => {
    setScanning(!scan);
  };
  return (
    <>
      {scan ? (
        <QRScanner />
      ) : (
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
      )}
    </>
  );
};

export default Home;
