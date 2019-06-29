<template>
  <div>
    <header>
      <div class="basket">
        <p v-if="!show"
         @click="showBasket">Корзина: {{count}} товаров</p>
        <p v-else
         @click="showBasket">Вернуться на главную</p>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  computed: mapState([
        "count", "show"
    ]),
    methods: {
      showBasket() {
        this.$store.dispatch('showBasket')
      }
    }
}
</script>

<style lang="sass" scoped>
header
  background-color: yellow
  height: 60px
  display: flex
  justify-content: flex-end
.basket
  min-width: 200px
  height: 100%
  background-color: red
  text-align: center
  padding: 15px
</style>

