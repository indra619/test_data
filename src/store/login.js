"use strict"

import cookie from "@/utils/auth.js"


export default {
    state: {
        token: cookie.getCookie() || null
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        }


    },
    actions: {
        setToken(context, payload) {
            // let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

            cookie.setCookie(payload)
            context.commit("SET_TOKEN", payload)
        },
        removeToken(context) {
            cookie.removeCookie()
            context.commit("SET_TOKEN", null)
        }
    },
    getters: {
        token: state => state.token
    }
}