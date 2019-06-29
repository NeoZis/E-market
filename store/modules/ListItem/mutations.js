import { CLICK} from "./mutation-types";

export default {
    [CLICK] (state, addItem){
        state.count++;
        if (state.basket.indexOf(addItem) > -1){
            state.basket[state.basket.indexOf(addItem)].count++
        } else {
            addItem.count = 1;
            state.basket.push(addItem)
        }
    }
}