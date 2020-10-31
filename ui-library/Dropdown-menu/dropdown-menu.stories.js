import DropdownMenu from "./index.vue";
import ItemList from "./../../ui-library/Item-list";
import ListItemCheckbox from "./../../ui-library/List-item-checkbox";
import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Dropdown-menu",
  decorators: [wrap, withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/
};

// default task state
export const Default = () => ({
  components: { DropdownMenu, ItemList, ListItemCheckbox },
  template: `<Dropdown-menu isOpen>
      <Item-list v-for="item in items" :key="item.index" :iconName="item.iconName">{{ item.btnText }}</Item-list>
      <List-item-checkbox v-for="item in items" :key="item.index">{{ item.btnText }}</List-item-checkbox>
  </Dropdown-menu>`,
  data() {
    return {
      activeIndex: null,
      items: [
        {'index': '1', 'btnText': 'Аккаунт', 'iconName': 'User', 'isActive': true},
        {'index': '2', 'btnText': 'Выход', 'isActive': false},
        {'index': '3', 'btnText': 'Топы', 'isActive': false},
        {'index': '4', 'btnText': 'Профили', 'iconName': 'Compare', 'isActive': false, 'last': true},
        {'index': '5', 'btnText': 'Блоги', 'iconName': 'Information-FAQ-small', 'isActive': false, 'last': true}
      ]
    };
  }
});
