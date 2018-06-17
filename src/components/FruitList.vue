<template>
  <div class="all-fruits">
    <h2>All Fruits</h2>
    <ul v-if="allFruits">
      <li v-for="fruit in allFruits" :key="fruit.id">{{fruit.name}} <em v-if="fruit.color">{{fruit.color.name}}</em></li>
    </ul>
  </div>
</template>

<script>
import allFruitQuery from '@/mixins/allFruitQuery'
export default {
  mixins: [allFruitQuery]
}
</script>
