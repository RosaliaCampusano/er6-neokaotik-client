import React, { useContext, createContext, useState } from 'react';
import { AppState } from './constants';

export const AppContext = createContext<any>(null);

export const AppProviderContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [actualState, setActualState] = useState(AppState.SPLASH_SCREEN);
  const [scan, setScanning] = useState(false);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        errorMessage,
        scan,
        setErrorMessage,
        actualState,
        setActualState,
        setScanning,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
