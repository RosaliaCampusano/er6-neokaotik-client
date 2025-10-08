import React from 'react';
import { Button, ImageContainer, Text, LabUrl } from '../css/style';
import { AppProviderContext } from '../../../helpers/AppProvider';
import { MortimerState } from '../../../helpers/constants';

const Lab = () => {
  const { setMortimerState } = AppProviderContext();
  return (
    <ImageContainer source={LabUrl} resizeMode="cover">
      <Button
        onPress={() => {
          setMortimerState(MortimerState.HOME);
        }}
      >
        <Text>Go back</Text>
      </Button>
    </ImageContainer>
  );
};

export default Lab;
