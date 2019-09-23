import { shallowMount } from "@vue/test-utils";
import GithubFooter from "@/components/GithubFooter.vue";

describe("GithubFooter.vue", () => {
  it("should display link to github repo", () => {
    const wrapper = shallowMount(GithubFooter);
    const div = wrapper.find("div");
    const a = div.find("a");

    expect(a.attributes().href).toEqual(
      "https://github.com/oygen87/vue-socket-io"
    );

    const githubLogo = a.find("i");
    expect(githubLogo.attributes().class).toEqual("fa fa-github");
  });
});
