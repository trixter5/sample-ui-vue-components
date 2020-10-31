import Dropdown from "./index.vue";
import ItemList from "./../../ui-library/Item-list";
import ListItemCheckbox from "./../../ui-library/List-item-checkbox";
import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Dropdown",
  decorators: [wrap, withKnobs],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/
};

// default task state
export const Default = () => ({
  components: { Dropdown, ItemList, ListItemCheckbox },
  template: `<Dropdown>
      <template v-slot:trigger>trigger</template>    
      <template v-slot:content>content</template>    
  </Dropdown>`,
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
