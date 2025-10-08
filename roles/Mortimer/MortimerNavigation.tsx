import React from 'react';
import Home from './components/Home';
import Lab from './components/Laboratory';
import { MortimerState } from '../../helpers/constants';
import { AppProviderContext } from '../../helpers/AppProvider';

const MortimerNavigation = () => {
  const { mortimerState } = AppProviderContext();
  return <>{mortimerState === MortimerState.HOME ? <Home /> : <Lab />}</>;
};

export default MortimerNavigation;
