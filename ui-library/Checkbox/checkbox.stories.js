import Checkbox from "./index.vue";
import { wrap } from "../../../../.storybook/globalWrapper";
import { boolean, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Design System|UI-Library/Checkbox",
  decorators: [wrap, withKnobs],
  excludeStories: /.*Data$/,
  parameters: {
    component: Checkbox,
    componentSubtitle: "Checkbox"
  }
};

const taskTemplate = `
    <div>
    <Checkbox name="food[]" v-model="par" value="Apple"  @change="change" checked>Apple</Checkbox>
    <Checkbox name="food[]" v-model="par" value="Orange"  @change="change">Orange</Checkbox>
    <Checkbox name="food[]" v-model="par" value="Banana"  @change="change">Banana</Checkbox>
     {{ par }}
    <hr>
    <Checkbox name="el" v-model="par2" value="1"  @change="change" checked>1</Checkbox>
    <Checkbox name="el" v-model="par2" value="2"  @change="change">2</Checkbox>
    <Checkbox name="el" v-model="par2" value="3"  @change="change">3</Checkbox>
    {{ par2 }}
    <hr>
    <Checkbox name="el1" v-model="par3" value="11"  @change="change" >11</Checkbox>
    <Checkbox name="el2" v-model="par4" value="22"  @change="change" checked>22</Checkbox>
    <Checkbox name="el3" v-model="par5" value="33"  @change="change">33</Checkbox>
    {{ par3 }}  {{ par4 }}  {{ par5 }}
    </div>
`;

export const TestCheckbox = () => ({
  components: { Checkbox },
  decorators: [wrap, withKnobs],
  template: taskTemplate,
  data() {
    return {
      par: [],
      par2: "",
      par3: "",
      par4: "",
      par5: "",
    };
  },
  methods: {
    change(e) {
      window.console.log(e, this.par);
    }
  }
});
