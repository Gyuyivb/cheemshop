/**Se calcula el precio del carro por orden
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */


export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price);
    return +sum.toFixed(2)
}