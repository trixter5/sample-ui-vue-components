import InputPhone from "./index.vue";
import {wrap} from "../../../../.storybook/globalWrapper";
import {withKnobs, select} from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Input-phone",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: InputPhone,
    componentSubtitle: "Input Text"
  }
};

export const TestListItem = () => ({
  components: { InputPhone },
  decorators: [wrap, withKnobs],
  template: `<div><Input-phone prefix="+7" placeholder="Телефон" label="Email" placeholderValue="(___)___-____" name="name1" pattern="[1-9]\\d*$" :errorText="errorText" v-model="text" icon="Filter" small></Input-phone><span>{{ text }}</span></div>`,
  data() {
    return {
      errorText: "Неверный номер",
      text: ""
    };
  }
});
