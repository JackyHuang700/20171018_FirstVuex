export const getProductss = state => {
  return state.products
}

export const getSaleProducts = state => {
  return state.products.map(product => {
    return {
      name: `**${product.name}**`,
      price: product.price / 2
    }
  })
}
