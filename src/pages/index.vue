<template>
  <div class="home">
    <app-fruit-list></app-fruit-list>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList.vue'

export default {
  name: 'home',
  components: {
    appFruitList: FruitList
  }
}
</script>
