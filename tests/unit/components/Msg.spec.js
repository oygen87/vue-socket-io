import { shallowMount } from "@vue/test-utils";
import Msg from "@/components/Msg.vue";

describe("Msg.vue", () => {
  it("renders message correctly", () => {
    const wrapper = shallowMount(Msg, {
      propsData: {
        username: "foo",
        message: "bar baz boo"
      }
    });
    expect(wrapper.contains("div")).toBe(true);
    expect(
      wrapper
        .find("div")
        .find("strong")
        .text()
    ).toBe("foo :");
    expect(
      wrapper
        .find("div")
        .find("span")
        .text()
    ).toBe("bar baz boo");
  });
});
