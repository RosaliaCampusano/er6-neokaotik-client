import Main from './components/Main';
import React from 'react';
import AppProvider from './helpers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
