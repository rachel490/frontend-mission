import { mount } from '@vue/test-utils';
import Item from '@/components/ItemList/Item.vue';

describe('Item', () => {
  it('renders Item', () => {
    const wrapper = mount(Item);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  //product 사진있는지 확인
  it('renders product image', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      img : 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    })

  expect(wrapper.find('img').exists()).toBe(true);
  expect(wrapper.find('img').attributes('src')).toEqual(wrapper.vm.img);
  })

  //product 이름있는지 확인
  it('render product name', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      name : 'trench coat'
    })

    expect(wrapper.get('[data-test="name"]').text()).toEqual(wrapper.vm.name);
  })
});


// product 이름있는지 확인
// product 가격있는지 확인
// product description있는지 확인
// product 할인이있는 경우 할인율 조건부 렌더링되는지 확인
