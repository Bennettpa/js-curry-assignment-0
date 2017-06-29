'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      return Array.apply(null, Array(count)).map(element => itemName)
    }

// choose: [a] -> number -> Generator<a>
const choose =
  options =>
    function * (n) {
      let i = 0
      while (i++ < n) {
        yield options[Math.floor(Math.random() * options.length)]
      }
    }


/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      const result = []
      const {name: items} = listings
      console.log(items.name)
      return result
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
