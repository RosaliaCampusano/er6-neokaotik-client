import Main from './components/main';
import AppProvider from './helpers/AppProvider';

const App = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
