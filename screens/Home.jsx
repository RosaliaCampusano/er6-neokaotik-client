import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const View = styled.View`
    align-items: center; 
    height: 500px;
`;



const Home = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );  
}

export default Home;