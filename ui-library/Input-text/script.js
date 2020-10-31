import SvgIcon from "../../svgIcon/index.vue";
import ButtonIcon from "./../Buttons/Button-icon/index.vue";

export default {
  components: {
    SvgIcon,
    ButtonIcon
  },
  inheritAttrs: false,
  data() {
    return {
      error: false,
      val: this.model,
      caps: false,
      iconPassword: "Show-on",
      typePass: "password",
      show: false,
      process: false
    };
  },
  model: {
    prop: "model"
  },
  props: {
    model: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String
    },
    icon: {
      type: String
    },
    placeholder: {
      type: String
    },
    errorText: {
      type: String,
      default: "Ошибка"
    },
    warningText: {
      type: String,
      default: "Включен “Caps Lock”"
    },
    errorTextServer: {
      type: String
    },
    pattern: {
      type: String
    },
    placeholderValue: String,
    small: {
      type: Boolean,
      default: false
    },
    typePassword: {
      type: Boolean,
      Default: false
    },
    load: {
      type: Boolean
    },
    isError: {
      type: Boolean
    }
  },
  watch: {
    isError() {
      this.error = this.isError === true;
    },
    show() {
      if (this.show) {
        this.iconPassword = "Show-off";
        this.typePass = "text";
      } else {
        this.iconPassword = "Show-on";
        this.typePass = "password";
      }
    },
    load() {
      this.load === true ? (this.process = true) : (this.process = false);
    },
    model(val) {
      this.validate(this.pattern, val);
      if (val === "") {
        this.error = false;
      }

    }
  },
  methods: {
    validate(pattern, model) {
      if (model) {
        const re = new RegExp(pattern);
        re.test(model) ? (this.error = false) : (this.error = true);
        this.$emit("patternValid", re.test(model));
      } else {
        this.$emit("patternValid", false);
      }
    },
    onInput(e, pattern, model) {
      this.$emit('input', e.target.value);
      this.validate(pattern, model)
    },
    toggleShowPassword() {
      this.show = !this.show;
    },
    isCapsLock(e) {
      this.caps = e.getModifierState("CapsLock");
    },
    hoverHandler() {
      this.$emit("hover");
    },
    leaveHandler() {
      this.$emit("leave");
    }
  }
};
