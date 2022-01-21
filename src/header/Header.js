import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
    background-color: darkcyan;
    text-align: center;
`

const Title = styled.h1`
    color: white;
    font-size: 40px;
`

const Header = () => {
    return (
        <AppHeader>
            <Title>
                Price Calculator
            </Title>
        </AppHeader>
    )
}

export default Header