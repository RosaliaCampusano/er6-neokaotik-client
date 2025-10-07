import { ImageContainer, urlImage, Button, Text } from '../css/homeStyle';
import { handlerPress } from '../../../components/singOut';
import { AppProviderContext } from '../../../helpers/AppProvider';

const Home = () => {
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

export default Home;
