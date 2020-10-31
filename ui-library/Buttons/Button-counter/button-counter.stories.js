import ButtonCounter from "./index.vue";
import { wrap } from "../../../../../.storybook/globalWrapper";
import {withKnobs, boolean, select} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Buttons/Button-counter",
  decorators: [wrap, withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  parameters: {
    component: ButtonCounter,
    componentSubtitle: "Кнопка. Имеет два входных параметра"
  }
};
// default task state
export const Default = () => ({
  components: { ButtonCounter },
  template: `<Button-counter btnCount="232" :headerArea="headerArea" :isActive="isActive" :iconName="iconName">Button counter</Button-counter>`,
  props: {
    iconName: {
      default: select("Select Icon", {
        No: "",
        Drag: "Drag",
        BookmarkOn: "Bookmark-on",
        Filter: "Filter"
      })
    },
    headerArea: {
      default: boolean("Header Area", false)
    },
    isActive: {
      default: boolean("Active", false)
    }
  }
});
