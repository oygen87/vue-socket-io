import { shallowMount } from "@vue/test-utils";
import GithubEvent from "@/components/GithubEvent.vue";

describe("GithubEvent.vue", () => {
  it("formats timestamp as time if within 24h or else as date", () => {
    const wrapper = shallowMount(GithubEvent, {
      propsData: {
        event: {
          created: "",
          id: "",
          actor: "",
          event: "",
          action: ""
        }
      }
    });

    const tenMinutesAgo = wrapper.vm.dateTime(
      "2019-09-17T07:37:33Z",
      "2019-09-17T07:47:33Z"
    );
    const isTimeFormatted = tenMinutesAgo.includes(":");
    expect(isTimeFormatted).toBe(true);

    const twoDaysAgo = wrapper.vm.dateTime(
      "2019-09-15T07:37:33Z",
      "2019-09-17T07:47:33Z"
    );
    const isDayFormatted = !twoDaysAgo.includes(":");
    expect(isDayFormatted).toBe(true);
  });
});
