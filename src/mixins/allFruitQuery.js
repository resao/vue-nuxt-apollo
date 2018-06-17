import allFruit from '@/graphql/queries/allFruit.gql'

export default {
  asyncData (context) {
    const client = context.app.apolloProvider.defaultClient
    return client.query({query: allFruit}).then(({data}) => {
      return data
    }).catch(e => {
      context.error(new Error())
    })
  }
}
