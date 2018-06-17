import allFruit from '@/graphql/queries/allFruit.gql'

export default {
  async asyncData (context) {
    const client = context.app.apolloProvider.defaultClient
    try {
      const response = await client.query({query: allFruit})
      return response.data
    } catch (e) {
      context.error(new Error())
    }
  }
}
