import axios from "axios"

export default {
    async nuxtServerInit({ commit }){
        const response = await axios.get("https://next.json-generator.com/api/json/get/4y_QCVeeD")
        const items = response.data

        commit("SET_ITEMS", items)
    },
    onClick({commit}, addItem){
        commit('CLICK', addItem)
    },
    showBasket({commit}){
        commit('SHOW_BASKET')
    }
}