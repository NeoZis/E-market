export default {
    onCalc({commit}){
        commit('CALC')
    },
    onDelete({commit}, delItem){
        commit('DELETE', delItem)
    }
}