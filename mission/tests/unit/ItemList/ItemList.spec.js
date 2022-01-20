import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('redners ItemListPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  // 제목있는지 확인 
  it('renders title', () => {
    const wrapper = mount(ItemInfoPage);
    const title = 'My Shopping Mall';

    expect(wrapper.get('[data-test="title"]').text()).toBe(title);
  })

  // Item 있는지 확인
  it('renders product item list', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="product-list"]').exists()).toBe(true);
  })

  // Footer있는지 확인 (홈, 찜, 장바구니, 마이페이지)
  it('renders footer', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.get('[data-test="footer"]').exists()).toBe(true);
    expect(wrapper.get('[data-test="footer"]').text()).toBe('홈,찜,장바구니,마이페이지');
  })
});




