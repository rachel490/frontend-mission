import { mount } from '@vue/test-utils';
import Footer from '@/components/ItemList/Footer.vue';

describe('Item List Footer', () => {
	 // Footer있는지 확인 (홈, 찜, 장바구니, 마이페이지)
	it('renders footer', () => {
	const wrapper = mount(Footer);

	expect(wrapper.get('[data-test="footer"]').exists()).toBe(true);
	expect(wrapper.get('[data-test="footer"]').text()).toBe('홈찜장바구니마이페이지');
	})
})