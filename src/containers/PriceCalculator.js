import React from "react";
import styled from "styled-components";
import Register from "../components/register/Register";
import Checkout from "../components/checkout/Checkout";

const PriceCalculatorContainer = styled.div`
    width: 100%;
    display: flex;
`

const PriceCalculator = () => {
    return (
        <PriceCalculatorContainer>
            <Register />
            <Checkout />
        </PriceCalculatorContainer>
    )
}

export default PriceCalculator;
