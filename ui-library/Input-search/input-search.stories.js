import InputSearch from "./index.vue";
import {wrap} from "../../../../.storybook/globalWrapper";
import {withKnobs, select} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Input-search",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: InputSearch,
    componentSubtitle: "Input Search"
  }
};

export const TestListItem = () => ({
  components: { InputSearch },
  decorators: [wrap, withKnobs],
  template: `<Input-search placeholder="Placeholder"   v-model="text"></Input-search>`,
  data() {
    return {
      text: ""
    };
  }
});
