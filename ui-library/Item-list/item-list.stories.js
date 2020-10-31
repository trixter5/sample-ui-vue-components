import ListItem from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/List-item",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: ListItem,
    componentSubtitle: "Item List"
  }
};

export const TestListItem = () => ({
  components: { ListItem },
  decorators: [wrap, withKnobs],
  template: `<ul><List-item :draggable="draggable" :iconName="iconName" :modifier="mod" :text="text"></List-item></ul>`,
  props: {
    iconName: {
      default: select("Select Icon", {
        No: "",
        Drag: "Drag",
        BookmarkOn: "Bookmark-on",
        Filter: "Filter"
      })
    },
    draggable: {
      default: boolean("Draggable", false)
    },
    mod: {
      default: text("Enter modifier and space", "group ")
    },
    text: {
      default: text("Enter text label", "List item")
    }
  }
});
