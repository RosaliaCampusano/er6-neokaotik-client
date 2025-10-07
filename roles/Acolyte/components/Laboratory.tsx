import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import { ImageContainer } from '../css/screenBackground';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { LabImage, LabDoor, Button, Text } from '../css/laboratory';

const Lab = () => {
  const { user } = AppProviderContext();
  const isInside = false; // --- Change for the isInside user attribute ---
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      {isInside ? (
        <ImageContainer
          source={LabImage}
          resizeMode="cover"
          style={{ filter: 'brightness(2)' }}
        >
          <Button onPress={() => setShowQR(!showQR)}>
            <Text>{showQR ? 'Hide QR' : 'Show QR'}</Text>
          </Button>

          {showQR && QRToScan(user.data.email)}
        </ImageContainer>
      ) : (
        <ImageContainer source={LabDoor} resizeMode="cover">
          {QRToScan(user.data.email)}
        </ImageContainer>
      )}
    </>
  );
};

const QRToScan = (email: string) => (
  <QRCode
    value={email}
    size={250}
    color="rgba(87, 175, 216)"
    backgroundColor="transparent"
  />
);

export default Lab;
