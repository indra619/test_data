"use strict"

export default {
    state: {
        user: {},
        allUserHasAcces: [
            // '2002004001', // ? Suryo Aji
            // '1999004599', // ? Dhana Siswaji
            // '2013077828', // ? Agus Lukman
            // '2013098418', // ? Rezha Kurniawan
            // '2000001965', // ? Abdul Aziz
            // '2011019262', //? Pauji
            // '2012068251', //? Sofyan Sori
            // '2015152132', //? Donny Lestiawan
            '2015191455', // ? Reza Larry
            '2015178697', // ? Indra
            '2015178558', // ? Verry
            '2015174253', //? Jennifer
            '2015014987', //? Ci Natalie
            '2012083052', //? Ci Fanie
            // '2013034709', //? Pak Luky
            // '2007004013', //? Bu Lyst
        ]
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }


    },
    actions: {
        setUser(context, payload) {
            context.commit("SET_USER", payload)
        },
        removeUser(context) {
            context.commit("SET_USER", null)

        }
    },
    getters: {
        user: state => state.user,
        hasAllAccess: state => state.allUserHasAcces.includes(state.user.NIK)

    }
}