/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total Pice
 */
export const totalPrice = (products) => {
    // let sum = 0;
    // products.forEach(product => sum += product.price);
    // return sum;
    const total = products.reduce((acc, product) => acc + product.price * (product.quantity||1), 0);
    return total.toFixed(2);
};