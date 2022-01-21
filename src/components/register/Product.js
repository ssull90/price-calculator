import React from "react";
import styled from "styled-components";

const ProductCard = styled.div`
    width: 100px;
`

const ProductImage = styled.img`
    background-color: mintcream;
    width: inherit;
`

const Product = () => {
    return (
        <ProductCard>
            <ProductImage src="/milk.png" alt="Apple" />
        </ProductCard>
    )
}

export default Product;
