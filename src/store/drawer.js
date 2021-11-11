"use strict"

export default{
    state: {
        drawer: false
      },
      mutations: {
        SET_DRAWER(state, drawer){
          state.drawer = drawer
        }
      },
      actions: {
        setDrawer(context, payload){
          context.commit("SET_DRAWER", payload)
        }
      },
      getters:{
          drawer: state => state.drawer
      }
}