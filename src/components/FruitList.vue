<template>
  <div class="all-fruits">
    <h2>All Fruits</h2>
    <ul v-if="fruits">
      <li v-for="fruit in fruits" :key="fruit.id">{{fruit.name}} <em v-if="fruit.color">{{fruit.color.name}}</em></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    fruits: {
      required: true,
      type: Array
    }
  }
}
</script>
