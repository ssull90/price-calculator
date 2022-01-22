import React from "react";
import Product from "./Product";
import styled from "styled-components";

const RegisterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Register = ({ productList, addToCart }) => {
    return (
        <RegisterContainer>
            {productList.map(product => (
                <Product
                    product={product}
                    addToCart={addToCart}
                    key={`${product.name}-${product.id}`}
                />
            ))}
        </RegisterContainer>
    )
}

export default Register;
