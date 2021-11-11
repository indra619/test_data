import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import user from './user'
import drawer from './drawer'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        user,
        drawer
    }
})