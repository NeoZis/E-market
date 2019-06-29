<template>
    <div class="container">
        <ul>
            <li v-for="item in items" :key="item.id">
                <div class="item">
                <p>Название: {{item.title}}</p>
                <p>Цена: {{item.price}} грн.</p>
                <button type="button" class="btn btn-success"
                 @click="onClick(item)">Добавить в корзину</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {mapState} from "vuex"

export default {
    data () {
        return {
        }
    },
    computed: mapState([
        "items"
    ]),
    methods:{
        onClick(item) {
            this.$store.dispatch('onClick', item)
        }
    }
}
</script>

<style scoped lang="sass">
ul
    list-style: none
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
.item
    width: 300px
    margin: 20px
    padding: 5px
    border: 1px solid black
</style>
