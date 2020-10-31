import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, withKnobs } from "@storybook/addon-knobs";
import DropdownSelect from "./index.vue";
export default {
  title: "Design System|UI-Library/Dropdown-select",
  decorators: [wrap, withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/
};

// default task state
export const Default = () => ({
  components: { DropdownSelect },
  template: `<Dropdown-select :arr="items" :avatar="avatar"></Dropdown-select>`,
  data() {
    return {
      activeIndex: null,
      items: [
        {'index': '0', 'listText': '89234'},
        {'index': '1', 'listText': '89235'},
        {'index': '2', 'listText': '89236'},
        {'index': '3', 'listText': '89237'},
        {'index': '4', 'listText': '89238'}
      ]
    };
  },
  props: {
    avatar: {
      default: boolean("avatar", false)
    }
  }
});
