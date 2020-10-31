import InputNumber from "./index.vue";
import {wrap} from "../../../../.storybook/globalWrapper";
import {withKnobs, select, boolean} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Input-number",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: InputNumber,
    componentSubtitle: "Input number"
  }
};

export const TestInputNumber = () => ({
  components: { InputNumber },
  decorators: [wrap, withKnobs],
  template: `<Input-number v-model="digit" :min="0.1" placeholder="Объем" placeholderValue="0.1" :small="small"></Input-number>`,
  data() {
    return {
      digit: 0.1
    }
  },
  props: {
    small: {
      default: boolean("small", false)
    }
  }
});
