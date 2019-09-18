import { shallowMount } from "@vue/test-utils";
import GithubEventContainer from "@/components/GithubEventContainer.vue";

describe("GithubEventContainer.vue", () => {
  let methods = {
    fetchData: jest.fn()
  };
  it("should fetch data", () => {
    shallowMount(GithubEventContainer, {
      methods
    });
    expect(methods.fetchData).toHaveBeenCalledTimes(1);
  });
});
