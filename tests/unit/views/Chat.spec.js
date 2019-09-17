import { shallowMount } from "@vue/test-utils";
import Chat from "@/views/Chat.vue";

describe("Chat.vue", () => {
  it("pretty prints repo url to <githubuser>/<repository>", () => {
    const wrapper = shallowMount(Chat, {
      propsData: {
        user: "",
        repo: "https://github.com/user/repo"
      }
    });

    expect(wrapper.vm.prettyPrintRepo).toEqual("user/repo");
  });
});
