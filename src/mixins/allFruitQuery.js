import allFruit from '@/graphql/queries/allFruit.gql'

export const allFruitQuery = {
  data () {
    return {
      allFruits: ''
    }
  },
  apollo: {
    allFruits: allFruit
  }
}
