import Home from './components/Home';
import QRScanner from './components/Scanner';
import { AppProviderContext } from '../../helpers/AppProvider';
import { IstvanState } from '../../helpers/constants';

const IstvanNavigation = () => {
  const { istvanState } = AppProviderContext();
  return <>{istvanState === IstvanState.HOME ? <Home /> : <QRScanner />}</>;
};

export default IstvanNavigation;
