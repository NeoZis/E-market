import { SET_ITEMS, SHOW_BASKET } from "./mutation-types";

export default {
    [SET_ITEMS] (state, items){
        state.items = items
    },
    [SHOW_BASKET] (state){
        state.show = !state.show
    }
}