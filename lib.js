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

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
 // constructCarts: [a] -> [b] -> [c]
const constructCarts =
  listings =>
    customers => {
      const result = []
      customers.forEach(cust => {
        let items = []
        const o = entries(cust.shoppingList)
        o.forEach(item => {
          const r = itemRepeater(item[0])
          items = [...items, ...r(item[1])]
        })
        const c = cart(cust.name, ...items)
        result.push(c)
      })
      return result
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
