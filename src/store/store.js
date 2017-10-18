import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* Vuex */
export const store = new Vuex.Store({
  strict: true,
  state: {
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
  },
  getters: {
    productss: state => {
      return state.products
    },
    saleProducts: state => {
      return state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        }
      })
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(data => {
        data.price = data.price - payload
      })
    }
  },
  actions: {
    reducePrice (context, payload) {
      const sec = 0.5
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, sec * 1000)
    }
  }
})
