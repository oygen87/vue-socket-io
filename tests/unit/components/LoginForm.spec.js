import { shallowMount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";

describe("LoginForm.vue", () => {
  it("Submit button should be disabled when form is empty or invalid", () => {
    const wrapper = shallowMount(LoginForm);
    expect(wrapper.find("button").attributes().disabled).toBe("disabled");

    wrapper.setData({ username: "foo", repo: "" });
    expect(wrapper.find("button").attributes().disabled).toBe("disabled");

    wrapper.setData({ username: "", repo: "bar" });
    expect(wrapper.find("button").attributes().disabled).toBe("disabled");
  });

  it("Submit button should be enabled when form is valid", () => {
    const wrapper = shallowMount(LoginForm);

    wrapper.setData({ username: "foo", repo: "bar" });
    expect(wrapper.find("button").attributes().disabled).toBe(undefined);
  });
});
