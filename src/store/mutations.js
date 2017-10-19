import * as types from './mutations_types'

// 資料集
export const state = {
  msg: 'Welcome to Your Vue.js App',
  products: [{
    name: 'Banana Skin',
    price: 20
  },
  {
    name: 'Shiny Star',
    price: 40
  },
  {
    name: 'Green Shells',
    price: 60
  },
  {
    name: 'Red Shells',
    price: 80
  }]
}

export const mutations = {
  [types.REDUCEPRICE] (state, payload) {
    state.products.forEach(data => {
      data.price = data.price - payload
    })
  }
}
