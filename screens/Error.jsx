import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
    align-items: center; 
    height: 500px;
`;



const Error = () => {
    return (
        <View>
            <Text>Error Screen</Text>
        </View>
    );  
}

export default Error;