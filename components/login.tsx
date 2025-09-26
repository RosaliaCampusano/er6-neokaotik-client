import React from "react";
import { Container, Image, Button, Text } from "../styled-components/loginStyled";

const Login = () => {
    return (
        <Container>
                <Image source={require("../assets/login.png")} />
            <Button >
                <Text>Sign In</Text>
                </Button>
        </Container>
    )
}
export default Login;