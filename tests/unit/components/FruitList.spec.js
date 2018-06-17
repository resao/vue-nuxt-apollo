import { shallowMount } from '@vue/test-utils'
import FruitList from '@/components/FruitList.vue'
import allFruitQuery from '@/mixins/allFruitQuery'

describe('FruitList.vue', () => {
  it('should include allFruitQuery mixin', () => {
    expect(FruitList.mixins).toContain(allFruitQuery)
  })

  it('should match html snapshot', () => {
    const wrapper = shallowMount(FruitList, {
      data() {
        return {
          allFruits: [{
            name: 'Apple',
            color: {
              name: 'Green'
            }
          }, {
            name: 'Banana',
            color: {
              name: 'Yellow'
            }
          }, {
            name: 'Banana',
            color: {
              name: 'Yellow'
            }
          }]
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
