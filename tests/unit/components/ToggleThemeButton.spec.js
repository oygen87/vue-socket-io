import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ToggleThemeButton from "@/components/ToggleThemeButton.vue";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("ToggleThemeButton.vue", () => {
  let actions;
  let store;
  let getters;

  beforeEach(() => {
    actions = {
      toggleTheme: jest.fn()
    };
    getters = {
      getTheme: jest.fn()
    };
    store = new Vuex.Store({
      actions,
      getters
    });
  });

  it("should dispatch action : toggleTheme", () => {
    const wrapper = shallowMount(ToggleThemeButton, { store, localVue });
    expect(wrapper.find("span").text()).toEqual("🌞");
    wrapper.trigger("click");
    expect(actions.toggleTheme).toHaveBeenCalled();
  });
});
