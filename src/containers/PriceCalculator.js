import React, { useState } from "react";
import styled from "styled-components";
import Register from "../components/register/Register";
import Checkout from "../components/checkout/Checkout";
import { PRODUCT_INFORMATION } from "../constants/constants";

const PriceCalculatorContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: [column1] 50% [column2] 50%;
`

const PriceCalculator = () => {
    const [shoppingCart, setShoppingCart] = useState({})

    const addToCart = (id, quantity) => {
        let newShoppingCart = { ...shoppingCart }
        if (shoppingCart[id]) {
            newShoppingCart[id] = newShoppingCart[id] + quantity
        } else {
            newShoppingCart[id] = quantity
        }
        setShoppingCart(newShoppingCart)
    }


    // Passing in PRODUCT_INFORMATION this way to simulate non-static rest data
    return (
        <PriceCalculatorContainer>
            <Register productList={PRODUCT_INFORMATION} addToCart={addToCart} />
            <Checkout shoppingCart={shoppingCart} productList={PRODUCT_INFORMATION} />
        </PriceCalculatorContainer>
    )
}

export default PriceCalculator;
