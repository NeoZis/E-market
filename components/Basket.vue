<template>
<div class="container">
    <ul>
        <li v-for="item in basket" :key="item.id">
            <div>
                <p>Товар: {{item.title}}</p>
                <p>Цена: {{item.price}}</p>
                <p>Количество: {{item.count}}</p>
                <button type="button" class="btn btn-success"
                 @click="onClick(item)">Добавить в корзину</button>
                <button type="button" class="btn btn-danger"
                 @click="onDelete(item)">Убрать с корзины</button>
                <p>Суммарно: {{item.count*item.price}} грн.</p>
            </div>
        </li>
    </ul>
            <div v-if="basket[0]!=undefined">
               <button type="button" class="btn btn-success"
                 @click="onCalc">Рассчитать стоимость:</button>
                 {{summary}} грн.
    </div>
</div>
</template>

<script>
import {mapState} from "vuex"

export default {
        computed: mapState([
        "basket","summary"
    ]),
        methods:{
        onClick(item) {
            this.$store.dispatch('onClick', item)
        },
        onDelete(item) {
            this.$store.dispatch('onDelete', item)
        },
        onCalc() {
            this.$store.dispatch('onCalc')
        }
    }
}
</script>

<style scoped lang="sass">
.container
    display: flex
    flex-direction: column
    align-items: center
ul
    list-style: none
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
li
    width: 300px
    border: 1px solid black
    padding: 10px
    margin: 20px
button
    margin-bottom: 10px
</style>
