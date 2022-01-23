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
      product : {
        img : 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
      }
    })

  expect(wrapper.find('img').exists()).toBe(true);
  expect(wrapper.find('img').attributes('src')).toEqual(wrapper.vm.product.img);
  })

  //product 이름있는지 확인
  it('render product name', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      name : 'trench coat'
    })

    expect(wrapper.get('[data-test="name"]').text()).toEqual(wrapper.vm.name);
  })

  //product 설명있는지 확인
  it('render product description', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      desc : "coat is grey. great for daily outfits"
    })

    expect(wrapper.get('[data-test="desc"]').text()).toEqual(wrapper.vm.desc);
  })

  it('render product price', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      originalPrice : 115000
    })

    expect(wrapper.get('[data-test="originalPrice"]').text()).toEqual(wrapper.vm.originalPrice+'원');
  })

  it('renders discount rate when product is on sale', async() => {
    const wrapper = mount(Item);

    await wrapper.setData({
      originalPrice: 115000,
      onSale: true,
      discountPrice: 89000,
    })

    const discountRate = Math.round((wrapper.vm.originalPrice-wrapper.vm.discountPrice)/wrapper.vm.originalPrice*100);
    
    expect(wrapper.get('[data-test="discountRate"]').text()).toEqual(discountRate + '%');
  })
});


// product 할인이있는 경우 할인율 조건부 렌더링되는지 확인
