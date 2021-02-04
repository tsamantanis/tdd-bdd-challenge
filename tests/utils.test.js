const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
    const hello = utils.sayHello()
    expect(hello).to.be.a("string")
    expect(hello).to.equal("Hello")
    expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================

// it("should return the area of a rectangle given width and height") // pending test
let rectWidth = 2
let rectHeight = 4
it("should return the area of a rectangle given width and height", function() {
    expect(utils.area(rectWidth, rectHeight)).to.be.a("number")
    expect(utils.area(rectWidth, rectHeight)).to.be.at.least(0)
    expect(utils.area(rectWidth, rectHeight)).to.be.equal(Math.abs(rectWidth * rectHeight))
    rectWidth = 10
    rectHeight = 0
    expect(utils.area(rectWidth, rectHeight)).to.be.equal(Math.abs(rectWidth * rectHeight))
})

// it("should return the perimeter of a rectangle given width and height") // pending test

it("should return the perimeter of a rectangle given width and height", function() {
    expect(utils.perimeter(rectWidth, rectHeight)).to.be.a("number")
    expect(utils.perimeter(rectWidth, rectHeight)).to.be.at.least(0)
    expect(utils.perimeter(rectWidth, rectHeight)).to.be.equal(Math.abs(2 * rectWidth + 2 * rectHeight))
    rectWidth = 10
    rectHeight = 0
    expect(utils.perimeter(rectWidth, rectHeight)).to.be.equal(Math.abs(2 * rectWidth + 2 * rectHeight))
})

// it("should return the area of a circle given its radius") // pending test
let radius = 10
it("should return the area of a circle given its radius", function() {
    expect(utils.circleArea(radius)).to.be.a("number")
    expect(utils.circleArea(radius)).to.be.at.least(0)
    expect(utils.circleArea(radius)).to.be.equal(Math.abs(2 * Math.PI * radius))
    radius = 0
    expect(utils.circleArea(radius)).to.be.equal(Math.abs(2 * Math.PI * radius))
})


// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
    utils.clearCart()
    done()
})

it("Should create a new (object) Item with name and price", function() {
    const item = utils.createItem("apple", 0.99)
    expect(item).to.be.a("object")
    expect(item).to.have.property("name", "apple")
    expect(item).to.have.property("price", 0.99)
    expect(item).to.have.property("quantity", 1)
})

// it("Should return an array containing all items in cart") // pending test
it("Should return an array containing all items in cart", function() {
    const apple = utils.createItem("apple", 0.99)
    const banana = utils.createItem("banana", 1.29)
    utils.addItemToCart(apple)
    utils.addItemToCart(banana)
    expect(utils.getShoppingCart()).to.be.a("array")
    expect(utils.getShoppingCart().length).to.be.equal(2)
})

// it("Should add a new item to the shopping cart") // pending test
it("Should add a new item to the shopping cart", function() {
    const length = utils.getShoppingCart().length
    const item = utils.createItem("apple", 0.99)
    utils.addItemToCart(item)
    expect(utils.getShoppingCart()[length]).to.be.a("object")
    expect(utils.getShoppingCart().length).to.be.equal(length + 1)
    expect(utils.getShoppingCart()).to.include(item)
})

// it("Should return the number of items in the cart") // pending test
it("Should return the number of items in the cart", function() {
    expect(utils.getNumItemsInCart()).to.be.equal(0)
    const item = utils.createItem("apple", 0.99)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.be.a("number")
    expect(utils.getNumItemsInCart()).to.be.at.least(0)
    expect(utils.getNumItemsInCart()).to.be.equal(1)
})

// it("Should remove items from cart") // pending test
it("Should remove items from cart", function() {
    const item = utils.createItem("apple", 0.99)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(1)
    utils.removeItemFromCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(0)
    expect(utils.removeItemFromCart(item)).to.be.equal("Item not found")

})

// ========================================================
// Stretch Challenges
// ========================================================

// it("Should update the count of items in the cart") // pending test
it("Should update the count of items in the cart", function() {
    const item = utils.createItem("apple", 0.99)
    utils.addItemToCart(item)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(2)
    utils.addItemToCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(3)
    utils.removeItemFromCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(2)
    utils.removeItemFromCart(item)
    utils.removeItemFromCart(item)
    expect(utils.getNumItemsInCart()).to.be.equal(0)
})

// it("Should validate that an empty cart has 0 items") // pending test
it("Should validate that an empty cart has 0 items", function() {
    expect(utils.isEmptyCart()).to.be.true
    const item = utils.createItem("apple", 0.99)
    utils.addItemToCart(item)
    expect(utils.isEmptyCart()).to.be.false
    utils.removeItemFromCart(item)
    expect(utils.isEmptyCart()).to.be.true
})

it("Should return the total cost of all items in the cart")
