import HeaderMenuSelect from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";

export default {
  title: "Design System|UI-Library/Header-menu-select",
  decorators: [wrap],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*props$/
};

// default task state
export const Default = () => ({
  components: { HeaderMenuSelect },
  template: `<Header-menu-select  :arr="btns"></Header-menu-select>`,
  data() {
    return {
      activeIndex: null,
      btns: [
        {
          index: "1",
          btnText: "Стратегии",
          iconName: "Change",
          isActive: true,
          headerArea: true
        },
        {
          index: "2",
          btnText: "Торговля",
          iconName: "Filter",
          isActive: false,
          headerArea: true
        },
        {
          index: "3",
          btnText: "Топы",
          iconName: "Night-mode-off",
          isActive: false,
          headerArea: true
        },
        {
          index: "4",
          btnText: "Профили",
          iconName: "Compare",
          isActive: false,
          headerArea: true
        },
        {
          index: "5",
          btnText: "Блоги",
          iconName: "Information-FAQ-small",
          isActive: false,
          headerArea: true
        }
      ]
    };
  }
});
