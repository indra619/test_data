import cookies from "js-cookie"
import VueCookies from 'vue-cookies'


export default {

    getCookie() {
        return cookies.get("Testing") || null
    },

    setCookie(token) {
        let newDate = new Date()
        newDate.toLocaleString('id', {
            timeZone: 'Asia/Jakarta'
        })

        let inFifteenMinutes = new Date(newDate.getTime() + 15 * 60 * 1000);

        let tempToken = token
        cookies.set("Testing", tempToken, {
            expires: inFifteenMinutes

        }, )
    },


    removeCookie() {
        cookies.remove("Testing")

    }
}