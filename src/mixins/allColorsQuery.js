import { willPrefetch } from 'vue-apollo'
import allColors from '@/graphql/queries/allColors.gql'

export default willPrefetch({
  apollo: {
    allColors: {
      query: allColors,
      prefetch: true
    }
  }
})
