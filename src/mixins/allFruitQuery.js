import { willPrefetch } from 'vue-apollo'
import allFruits from '@/graphql/queries/allFruits.gql'

export default willPrefetch({
  apollo: {
    allFruits: {
      query: allFruits,
      prefetch: true
    }
  }
})
