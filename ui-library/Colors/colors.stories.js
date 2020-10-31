import Colors from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
export default {
  title: "Design System|UI-Library/Colors",
  decorators: [wrap]
};

const taskTemplate = `<Colors />`;

export const Default = () => ({
  components: { Colors },
  template: taskTemplate
});
