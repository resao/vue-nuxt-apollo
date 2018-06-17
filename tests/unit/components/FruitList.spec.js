import { shallowMount } from '@vue/test-utils'
import FruitList from '@/components/FruitList.vue'

describe('FruitList.vue', () => {
  it('should match html snapshot', () => {
    const wrapper = shallowMount(FruitList, {
      data () {
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
