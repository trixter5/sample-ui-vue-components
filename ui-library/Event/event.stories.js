import Event from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, select, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Event",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: Event,
    componentSubtitle: "Event"
  }
};

const taskTemplate = `
    <Event></Event>
`;

export const TestEvent = () => ({
  components: { Event },
  decorators: [wrap, withKnobs],
  template: taskTemplate
});
