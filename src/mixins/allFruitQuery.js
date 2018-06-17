import allFruits from '@/graphql/queries/allFruits.gql'

export default {
  /* async asyncData (context) {
    const client = context.app.apolloProvider.defaultClient
    try {
      const response = await client.query({query: allFruits})
      return response.data
    } catch (e) {
      context.error(new Error())
    }
  } */
  data: function () {
    return {
      allFruits: []
    }
  },
  apollo: {
    allFruits: {
      query: allFruits,
      prefetch: true
    }
  }
}
