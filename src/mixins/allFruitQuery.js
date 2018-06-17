import allFruit from '@/graphql/queries/allFruit.gql'

export default {
  asyncData (context, callback) {
    const client = context.app.apolloProvider.defaultClient
    return client.query({query: allFruit}).then(({data}) => {
      callback(null, data)
    }).catch(e => {
      context.error(new Error())
    })
  }
}
