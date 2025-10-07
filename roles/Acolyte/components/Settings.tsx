import { ImageContainer, urlImage } from '../css/screenBackground';
import SingOut from '../../../components/singOut';

const Settings = () => {
  return (
    <ImageContainer source={urlImage} resizeMode="cover">
      <SingOut />
    </ImageContainer>
  );
};

export default Settings;
