import SvgIcon from "../../svgIcon/index.vue";
import ButtonIcon from "./../Buttons/Button-icon/index.vue";
import ButtonLabel from "./../Buttons/Button-label/index.vue";

export default {
  components: {
    SvgIcon,
    ButtonIcon,
    ButtonLabel
  },
  inheritAttrs: false,
  data() {
    return {
      error: false,
      val: this.model,
      inputType: this.type,
      prefixOpen: false
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
    small: {
      type: Boolean
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
    errorTextServer: {
      type: String,
      default: "Ошибка сервера"
    },
    pattern: {
      type: String
    },
    prefix: {
      type: String
    },
    placeholderValue: String,
    mask: String
  },
  computed: {
    prefixArrowIcon() {
      return this.prefixOpen === true
        ? "Arrow-dropdown-top"
        : "Arrow-dropdown-bottom";
    }
  },
  watch: {
    model(value) {
      let x = value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.val = !x[2] ? '(' + x[1] + ')' : '(' + x[1] + ')' + x[2] + (x[3] ? '-' + x[3] : '');
      if (this.val === "()") {
        this.val = "";
      }
    }
  },
  methods: {
    validate(pattern, model) {
      if (model) {
        const re = new RegExp(pattern);
        if (re.test(model)) {
          this.error = false;
        } else {
          this.error = true;
          model = "";
        }
        this.$emit("patternValid", re.test(model));
      }
    },
    hoverHandler() {
      this.$emit("hover");
    },
    leaveHandler() {
      this.$emit("leave");
    },
    togglePrefix() {
      this.prefixOpen = !this.prefixOpen;
      this.$emit("clickPrefix");
    }
  }
};
