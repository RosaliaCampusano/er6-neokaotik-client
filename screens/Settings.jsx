import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
    align-items: center; 
    height: 500px;
`;



const Settings = () => {
    return (
        <View>
            <Text>Settings Screen</Text>
        </View>
    );  
}

export default Settings;