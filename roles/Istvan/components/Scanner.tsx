import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  useCameraDevice,
  useCodeScanner,
  Camera,
} from 'react-native-vision-camera';
import { AppProviderContext } from '../../../helpers/AppProvider';

const QRScanner = () => {
  const device = useCameraDevice('back');
  const [hasPermission, setHasPermission] = useState(false);
  const { scan, setScanning } = AppProviderContext();

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
      setHasPermission(status !== 'denied');
    })();
  }, []);

  return (
    device != null &&
    hasPermission && (
      <>
        <Camera
          style={StyleSheet.absoluteFillObject}
          device={device}
          isActive={scan}
          codeScanner={codeScanner}
          enableZoomGesture={true}
        />
      </>
    )
  );
};

export default QRScanner;
