import React from 'react';
import { ImageContainer, urlImage } from '../css/screenBackground';

const Home = () => {
  return <ImageContainer source={urlImage} resizeMode="cover" />;
};

export default Home;
