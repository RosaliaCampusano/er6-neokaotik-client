import React, { useEffect } from 'react';
import { ROL } from '../helpers/constants';
import IstvanNavigation from '../roles/Istvan/IstvanNavigation';
import AcolyteNavigation from '../roles/Acolyte/AcolyteNavigation';
import VillianNavigation from '../roles/Villian/VillianNavigation';
import MortimerNavigation from '../roles/Mortimer/MortimerNavigation';
import { initSocket, performSocketCleanUp } from '../socket/socket';
import { AppProviderContext } from '../helpers/AppProvider';

const Navigation = () => {
  const { user } = AppProviderContext();

  useEffect(() => {
    if (user) {
      initSocket(user.data.email);

      return performSocketCleanUp;
    }
  }, [user]);

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
