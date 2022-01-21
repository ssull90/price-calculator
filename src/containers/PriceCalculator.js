import React from "react";
import styled from "styled-components";
import Register from "../components/register/Register";
import Checkout from "../components/checkout/Checkout";
import PRODUCT_INFORMATION from "../constants/ProductInformation";

const PriceCalculatorContainer = styled.div`
    width: 100%;
    display: grid;
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
