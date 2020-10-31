import SvgIcon from "./../../../svgIcon/index.vue";
import ButtonIcon from "./index.vue";
import { wrap } from "../../../../../.storybook/globalWrapper";
import { withKnobs, boolean, select, text} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Buttons/Button-icon",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: ButtonIcon,
    componentSubtitle: "Кнопка. Имеет два входных параметра"
  }
};

const taskTemplate = `<Button-icon :isActive="active" @toggle="active = !active" :iconName="iconName" :modifier="modifier"></Button-icon>`;

export const TestButton = () => ({
  components: { ButtonIcon, SvgIcon },

  template: taskTemplate,
  data() {
    return {
      active: false
    };
  },
  props: {
    iconName: {
      default: select("Select icon", ["Close", "Change", "Account-exit", "Compare", "Drag", "Filter", "Bookmark-on", "Menu-dot", "User"])
    },
    modifier: {
      default: text(
        "Модификатор (flat, square, min, subheader, dropdownTrigger)",
        "flat"
      )
    }
  }
});
