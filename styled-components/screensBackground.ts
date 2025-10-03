import { ImageBackground } from 'react-native';
import styled from 'styled-components/native';

const ImageContainer = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  filter: brightness(1.1);
`;

export { ImageContainer };
