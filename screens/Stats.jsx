import React from 'react';
import { ImageContainer } from '../styled-components/screensBackground';

const Stats = () => {
  return (
    <ImageContainer
      source={require('../assets/backgroundNavigation.png')}
      resizeMode="cover"
    />
  );
};

export default Stats;
