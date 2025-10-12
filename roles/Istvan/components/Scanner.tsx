import {
  useCameraDevice,
  useCodeScanner,
  Camera,
  CameraPermissionStatus,
} from 'react-native-vision-camera';
import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IstvanState } from '../../../helpers/constants';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { Container, Button, Text, Overlay } from '../css/scannerStyle';

const QRScanner = () => {
  const device: any = useCameraDevice('back');
  const [hasPermission, setHasPermission] =
    useState<CameraPermissionStatus | null>(null);
  const { scan, setScanning, setIstvanState } = AppProviderContext();

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'upc-a'],
    onCodeScanned: codes => {
      if (scan) {
        console.log(`Scanned ${codes[0].value}`);
        setScanning(false);
      }
    },
  });

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status);
    })();
  }, []);

  useEffect(() => {
    if (!scan) {
      setIstvanState(IstvanState.HOME);
    }
  }, [scan]);

  return (
    <Container>
      <Camera
        style={StyleSheet.absoluteFillObject}
        device={device}
        isActive={scan}
        codeScanner={codeScanner}
        enableZoomGesture
      />
      <Overlay>
        <Button
          onPress={() => {
            setScanning(false);
          }}
        >
          <Text>X</Text>
        </Button>
      </Overlay>
    </Container>
  );
};

export default QRScanner;
