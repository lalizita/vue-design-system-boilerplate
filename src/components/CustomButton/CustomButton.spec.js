import { mount } from "@vue/test-utils";
import CustomButton from "./CustomButton.vue";

describe("Custom Button", () => {
  it("Should render custom buttom correctly", () => {
    const wrapper = mount(CustomButton, {
      propsData: {
        msg: "testing",
      },
    });
    console.log("WRAPPER", wrapper);
  });
});
