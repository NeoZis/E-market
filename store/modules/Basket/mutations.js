import { CALC, DELETE} from "./mutation-types";

export default {
    [CALC] (state){
        state.summary = 0;
        state.basket.forEach(function(item){
            state.summary += (item.price*item.count)
        })
    },
    [DELETE] (state, delItem){
        state.count -= state.basket[state.basket.indexOf(delItem)].count;
        state.basket.splice(state.basket.indexOf(delItem), 1);
        if(state.basket.length == 0){
            state.summary = 0;
        }
    }
}