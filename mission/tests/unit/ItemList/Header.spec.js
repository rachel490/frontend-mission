import { mount } from "@vue/test-utils";
import Header from "@/components/ItemList/Header.vue";

describe("Item List Header", () => {
  // 제목있는지 확인
  it("renders title", () => {
    const wrapper = mount(Header);
    const title = "My Shopping Mall";

    expect(wrapper.get('[data-test="title"]').text()).toBe(title);
  });
});
