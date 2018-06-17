<template>
  <div class="colour-page">
    <app-colour-list/>
  </div>
</template>

<script>
import ColourList from '@/components/ColourList'

export default {
  name: 'home',
  components: {
    appColourList: ColourList
  }
}
</script>
