import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
    align-items: center; 
    height: 500px;
`;



const Lab = () => {
    return (
        <View>
            <Text>Laboratory Screen</Text>
        </View>
    );  
}

export default Lab;