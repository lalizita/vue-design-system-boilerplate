import "../../assets/tailwind.css";
import CustomButton from "./CustomButton.vue";

export default { title: "Custom Button" };

export const withABigText = () => ({
  components: { CustomButton },
  template:
    "<custom-button msg='click me as never you have clicked in a button before'/>",
});
export const asAComponent = () => ({
  components: { CustomButton },
  template: "<custom-button msg='click me'/>",
});
