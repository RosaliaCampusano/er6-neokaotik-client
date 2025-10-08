import React, { useContext, createContext, useState } from 'react';
import { AppState, MortimerState } from './constants';

export const AppContext = createContext<any>(null);

export const AppProviderContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [actualState, setActualState] = useState<number>(
    AppState.SPLASH_SCREEN,
  );
  const [scan, setScanning] = useState<boolean>(false);
  const [mortimerState, setMortimerState] = useState<number>(
    MortimerState.HOME,
  );

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        errorMessage,
        scan,
        mortimerState,
        setErrorMessage,
        actualState,
        setActualState,
        setScanning,
        setMortimerState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
