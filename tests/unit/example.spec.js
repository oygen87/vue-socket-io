import { shallowMount } from '@vue/test-utils'
import FormComponent from '@/components/FormComponent.vue'

describe('FormComponent.vue', () => {
  it('contains input field', () => {
    const socket = {};
    const wrapper = shallowMount(FormComponent, {
      propsData: { socket }
    })
    const input = wrapper.find('input');
    expect(input.is('input')).toBe(true);
  })
})
