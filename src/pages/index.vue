<template>
  <div class="home">
    <app-fruit-list :fruits="allFruits"/>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList'
import allFruitQuery from '@/mixins/allFruitQuery'

export default {
  name: 'home',
  components: {
    appFruitList: FruitList
  },
  mixins: [allFruitQuery]
}
</script>
