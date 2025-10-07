import { ImageContainer, urlImage } from '../css/screenBackground';
import { Button, Text } from '../css/laboratory';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';

const Settings = () => {
  const { setActualState, setUser } = AppProviderContext();
  return (
    <ImageContainer source={urlImage} resizeMode="cover">
      <Button
        onPress={() => {
          handlerPress(setActualState, setUser);
        }}
      >
        <Text>Log out</Text>
      </Button>
    </ImageContainer>
  );
};

export default Settings;
