import CircleProgress from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
import { withKnobs, text } from "@storybook/addon-knobs";
export default {
  title: "Design System|UI-Library/CircleProgress",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: CircleProgress,
    componentSubtitle: "Прогресс-бар имееет 2 входных параметра"
  }
};

// const taskTemplate = `<CircleProgress :src="img" :size="size"></CircleProgress>`;

export const TestCircleProgress = () => ({
  components: { CircleProgress },

  template: `<CircleProgress :progress="percent"></CircleProgress>`,
  props: {
    percent: {
      default: text("percent", "20")
    }
  }
});
