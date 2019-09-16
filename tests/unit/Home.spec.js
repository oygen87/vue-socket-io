import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import LoginForm from "@/components/LoginForm.vue";

describe("Home.vue", () => {
  it("renders LoginForm", () => {
    const wrapper = shallowMount(Home);
    const loginFormComponent = wrapper.find(LoginForm);
    expect(loginFormComponent.name()).toBe("LoginForm");
  });
});
