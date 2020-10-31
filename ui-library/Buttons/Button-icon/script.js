import SvgIcon from "../../../svgIcon/index.vue";
export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      classList: ""
    };
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      required: false,
      default: "Close"
    },
    disable: {
      type: Boolean,
      required: false,
      default: false
    },
    modifier: {
      type: [Array, String]
    },
    color: {
      type: String,
      default: ""
    }
  },
  computed: {
    isDisabled() {
      return !this.disable;
    },
    mod() {
      let [mods, modsNew] = "";
      if (this.modifier) {
        mods = this.modifier.split(" ");
        modsNew = mods.map(m => "button-icon--" + m).join(" ");
        return modsNew;
      } else {
        return "";
      }
    }
  },
  methods: {
    toggle() {
      this.$emit("toggle");
    },
    onMouseOver() {
      this.$emit("mouseover");
    }
  }
};
