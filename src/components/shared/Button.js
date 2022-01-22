import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: steelblue;
    color: white;
    padding: 10px;
    border-radius: 10px;
`

const Button = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export default Button;
