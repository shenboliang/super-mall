import { createStore } from 'vuex'
import mutations from './vuex/mutation.js'
import actions from './vuex/action.js'
import modules from './vuex/module.js'

  const state = {
     goodsList:[]
  }

export default createStore({
   state , 
  mutations,
  actions,
  modules
})
