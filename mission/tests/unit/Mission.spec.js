import { mount } from '@vue/test-utils';
import Mission from '@/components/Mission.vue';

describe('Mission Component', () => {
  it('dislays input value', () => {
    const wrapper = mount(Mission);
    const value = wrapper.get('[data-test="string-rotation"]');
    expect(value.text()).toBe("Ably");
  });

  it('rotates string when 제출 button is clicked', async ()=> {
    const wrapper = mount(Mission);
    await wrapper.get('[data-test="submit-btn"]').trigger('click');
    const value = wrapper.get('[data-test="string-rotation"]');
    expect(value.text()).toBe("blyA");
  });
});


