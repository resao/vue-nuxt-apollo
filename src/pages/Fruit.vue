<template>
  <div class="fruit-page">
    <app-fruit-list/>
  </div>
</template>

<script>
import FruitList from '@/components/FruitList'

export default {
  name: 'home',
  components: {
    appFruitList: FruitList
  }
}
</script>
