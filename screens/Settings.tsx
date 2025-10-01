import React from 'react';
import { AppState } from '../helpers/constants';
import { View, Text, Button } from '../styled-components/settingStyled';

const Settings = ({ setActualState, setUser }: any) => {
  const handlerPress = () => {
    setActualState(AppState.LOGIN);
    setUser(null);
  };
  return (
    <View>
      <Button onPress={handlerPress}>
        <Text>Log out</Text>
      </Button>
    </View>
  );
};

export default Settings;
