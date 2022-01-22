import React, { useEffect, useState } from "react";

// A more complicated but more scalable function would simply check the difference from previous list and make the adjustments
const findPriceWithSales = (productInfo, quantity) => {
    let totalPrice = 0
    let moneySaved = 0
    let productQuantity = parseInt(quantity, 10)
    const { unitPrice } = productInfo
    totalPrice = productQuantity * unitPrice
    if (!productInfo.sale) {
        return { productTotal: totalPrice, productSavings: moneySaved }
    }
    const { units, salesPrice } = productInfo.sale
    const saleEligible = Math.trunc(productQuantity / units)
    const salesIneligible = productQuantity % units
    const priceAfterSales = (saleEligible * salesPrice) + (salesIneligible * unitPrice)
    moneySaved = totalPrice - priceAfterSales
    return { productTotal: priceAfterSales, productSavings: moneySaved }
}

const Checkout = ({ shoppingCart = [], productList = [] }) => {
    const [checkoutInfo, setCheckoutInfo] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalMoneySaved, setTotalMoneySaved] = useState(0)

    useEffect(() => {
        // When product list changes we recalculate the total values.
        let finalPrice = 0
        let moneySaved = 0
        const newCheckoutInfo = Object.entries(shoppingCart).map(([key, value]) => {
            const productInfo = productList.find((value) => (parseInt(value.id, 10) === parseInt(key, 10)))
            if (!productInfo) {
                console.error(`Could not find product id ${key} in product list`)
                return
            } else {
                const finalSale = findPriceWithSales(productInfo, value)
                finalPrice = finalPrice + finalSale.productTotal
                moneySaved = moneySaved + finalSale.productSavings
                return { name: productInfo.name, quantity: value, finalSale: finalSale.productTotal }
            }
        })

        setTotalPrice(finalPrice)
        setTotalMoneySaved(moneySaved)
        setCheckoutInfo(newCheckoutInfo)


    }, [shoppingCart, productList])


    return (
        <div>
            <h2>Checkout Summary</h2>
            {checkoutInfo.map((checkoutValue) => <p>{`${checkoutValue.name} x${checkoutValue.quantity}     \$${checkoutValue.finalSale.toFixed(2)}`}</p>)}
            <h2>Total</h2>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Money Saved: ${totalMoneySaved.toFixed(2)}</p>
        </div>
    )
}

export default Checkout;
