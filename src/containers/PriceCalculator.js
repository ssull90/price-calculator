import React from "react";
import styled from "styled-components";
import Register from "../components/register/Register";
import Checkout from "../components/checkout/Checkout";
import PRODUCT_INFORMATION from "../constants/ProductInformation";

const PriceCalculatorContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: [column1] 50% [column2] 50%;
`

const PriceCalculator = () => {
    return (
        <PriceCalculatorContainer>
            <Register productList={PRODUCT_INFORMATION} />
            <Checkout />
        </PriceCalculatorContainer>
    )
}

export default PriceCalculator;
