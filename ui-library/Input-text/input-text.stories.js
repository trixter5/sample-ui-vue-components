import InputText from "./index.vue";
import {wrap} from "../../../../.storybook/globalWrapper";
import {withKnobs, select, boolean} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Input-text",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: InputText,
    componentSubtitle: "Input Text"
  }
};

export const TestListItem = () => ({
  components: { InputText },
  decorators: [wrap, withKnobs],
  template: `<div><Input-text :type="type" name="name1" :errorText="errorText" :isError="error" :pattern="emailPattern" v-model="text" small :load="load"></Input-text><span>{{ text }}</span></div>`,
  data() {
    return {
      errorText: "Неверный email",
      emailPattern: "^[^@]+@[^@]+\\.[^@]+$",
      text: "()-___-__-__"
    };
  },
  props: {
    type: {
      default: select("type", ["text", "password", "tel"])
    },
    load: {
      default: boolean("load", false)
    },
    error: {
      default: boolean("error", false)
    }
  }
});
