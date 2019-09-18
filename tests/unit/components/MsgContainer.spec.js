import { shallowMount, mount } from "@vue/test-utils";
import MsgContainer from "@/components/MsgContainer.vue";

describe("MsgContainer.vue", () => {
  let methods = {
    fetchData: jest.fn(),
    setupSocketListener: jest.fn()
  };

  it("fetches Data on Mount.vue", () => {
    shallowMount(MsgContainer, {
      methods
    });
    expect(methods.fetchData).toHaveBeenCalledTimes(1);
    expect(methods.setupSocketListener).toHaveBeenCalledTimes(1);
  });

  afterAll(async done => {
    done();
  });
});
