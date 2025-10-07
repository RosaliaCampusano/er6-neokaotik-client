import React from 'react';
import { ROL } from '../helpers/constants';
import IstvanNavigation from '../roles/Istvan/IstvanNavigation';
import AcolyteNavigation from '../roles/Acolyte/AcolyteNavigation';
import VillianNavigation from '../roles/Villian/VillianNavigation';
import MortimerNavigation from '../roles/Mortimer/MortimerNavigation';

const Navigation = () => {
  return <>{setScreenByRol(ROL.ACOLYTE)}</>;
};

const setScreenByRol = (Rol: string) => {
  if (Rol === ROL.MORTIMER) {
    return <MortimerNavigation />;
  } else if (Rol === ROL.VILLIAN) {
    return <VillianNavigation />;
  } else if (Rol === ROL.ISTVAN) {
    return <IstvanNavigation />;
  } else if (Rol === ROL.ACOLYTE) {
    return <AcolyteNavigation />;
  }
};

export default Navigation;
