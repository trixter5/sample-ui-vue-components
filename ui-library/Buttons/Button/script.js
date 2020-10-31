export default {
  props: {
    typeBtn: {
      type: String,
      default: "primary",
      required: true
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    modifier: {
      type: String
    },
    process: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return "button-" + this.typeBtn;
    },
    isDisabled() {
      return !this.disable;
    },
    classNameText() {
      return "button-" + this.typeBtn + "__text";
    },
    mod() {
      let [mods, modsNew] = "";
      if (this.modifier) {
        mods = this.modifier.split(" ");
        modsNew = mods.map(m => `${this.className}--` + m).join(" ");
        return modsNew;
      } else {
        return "";
      }
    }
  }

};
