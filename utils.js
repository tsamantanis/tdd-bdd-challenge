// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
    return "Hello"
}

const area = (w, h) => {
    return Math.abs(w * h)
}

const perimeter = (w, h) => {
    return Math.abs(2 * w + 2 * h)
}

const circleArea = r => {
    return Math.abs(2 * Math.PI * r)
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
    shoppingCart.length = 0
}

const createItem = (name, price) => {
    return { name, price, quantity: 1 }
}

const getShoppingCart = () => {
    return shoppingCart
}

const addItemToCart = (item) => {
    shoppingCart.push(item)
}

const getNumItemsInCart = () => {
    return shoppingCart.length > 0 ?
        shoppingCart.reduce((accum, item) => accum + item.quantity, 0)
        : 0
}

const removeItemFromCart = (item) => {
    if (shoppingCart.length === 0 || !shoppingCart.includes(item)) {
        return "Item not found"
    }
    shoppingCart.splice(item, 1)
}

// ========================================================
// Stretch Challenges
// ========================================================

const isEmptyCart = () => {
    return getNumItemsInCart() === 0 && shoppingCart.length === 0
}

module.exports = {
    sayHello, area, perimeter, circleArea,
    clearCart, createItem, getShoppingCart, addItemToCart,
    getNumItemsInCart, removeItemFromCart, isEmptyCart
}
