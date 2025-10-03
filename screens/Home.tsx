import React from 'react';
import { ImageContainer } from '../styled-components/screensBackground';

const Home = () => {
  return (
    <ImageContainer
      source={require('../assets/backgroundNavigation.png')}
      resizeMode="cover"
    />
  );
};

export default Home;
