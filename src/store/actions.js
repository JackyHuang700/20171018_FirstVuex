// import Vue from 'vue'
import * as types from './mutations_types'

// 減少
export const actionReducePrice = ({ commit }, payload) => {
  const sec = 0.5
  setTimeout(() => {
    commit(types.REDUCEPRICE, payload)
  }, sec * 1000)
}
