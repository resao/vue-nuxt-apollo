<template>
  <div class="all-colours">
    <h2>All colours</h2>
    <ul v-if="allColors">
      <li v-for="colour in allColors" :key="colour.id">
        {{colour.name}}
        <em v-if="colour.fruits" v-for="fruit in colour.fruits" :key="fruit.id">
          {{fruit.name}}
        </em>
      </li>
    </ul>
  </div>
</template>

<script>
import allColorsQuery from '@/mixins/allColorsQuery'
export default {
  mixins: [allColorsQuery]
}
</script>
