import Button from "./index.vue";
import { wrap } from "../../../../../.storybook/globalWrapper";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Buttons/Button",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: Button,
    componentSubtitle: "Кнопка. Имеет два входных параметра"
  }
};

const taskTemplate = `<Button :typeBtn="typeBtn" :disable="disable">Button</Button>`;

export const TestButton = () => ({
  components: { Button },

  template: taskTemplate,
  props: {
    typeBtn: {
      default: select("Select Type Button", ["primary", "secondary", "cancel"])
    },
    disable: {
      default: boolean("Disabled Button", false)
    }
  }
});
