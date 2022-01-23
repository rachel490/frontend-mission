import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';

describe('ItemListPage', () => {
  it('renders ItemListPage', () => {
    const wrapper = mount(ItemListPage);

    expect(wrapper.find('#item-list-page').exists()).toBe(true);
  });

  // Item 있는지 확인
  it('renders product item list', () => {
    const wrapper = mount(ItemListPage);

    expect(wrapper.get('[data-test="product-list"]').exists()).toBe(true);
  })

});




