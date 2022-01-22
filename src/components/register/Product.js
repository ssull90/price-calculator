import React from "react";
import styled from "styled-components";
import Button from "../shared/Button";

const ProductCard = styled.div`
    // width: 100px;
`

const ImageContainer = styled.div`
    width: 150px;
    height: 150px;
    vertical-align: center;
`

const ProductImage = styled.img`
    background-color: mintcream;
    max-width: 150px;
    max-height: 150px;
`

const Product = ({ product }) => {
    console.log(product)
    return (
        <ProductCard>
            <ImageContainer>
                <ProductImage src={product.imageURL} alt={product.name} key={product.name} />
            </ImageContainer>
            <Button>Add to cart</Button>
        </ProductCard>
    )
}

export default Product;
