function CalculateFinalPrice(price, itemName) {

    let taxRate = 0.1;
    let discount = 0.2;
    let deliveryFee = 5;
    let total = (price * (1 - discount)) * (1 + taxRate) + deliveryFee;
    console.log(`Final price for ${itemName} is $${total}`)
}
CalculateFinalPrice(80, "shoes");
CalculateFinalPrice(150, "bags");
CalculateFinalPrice(10, "bags");