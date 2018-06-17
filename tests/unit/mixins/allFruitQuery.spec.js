import allFruits from '@/graphql/queries/allFruits.gql'
import allFruitQuery from '@/mixins/allFruitQuery'

describe('MIXIN: allFruitQuery', () => {
  it('apollo query should match defined mock query', () => {
    var mockAllFruitQuery = {
      apollo: {
        allFruits: {
          query: allFruits,
          prefetch: true
        }
      }
    }
    expect(mockAllFruitQuery).toEqual(allFruitQuery)
  })
})
