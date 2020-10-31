import SvgIcon from "../../../svgIcon/index.vue";
export default {
  components: {
    SvgIcon
  },
  data() {
    return {
      activeLiIndex: null
    }
  },
  props: {
    btnCount: {
      type: String,
      required: true,
      default: "0",
    },
    iconName: {
      type: String,
      required: false
    },
    isActive: {
      type: Boolean,
      required: false,
      default: false
    },
    index: {
      type: Number,
      required: false,
      default: null
    },
    headerArea: {
      type: Boolean,
      required: false,
      default: false
    },
    modifier: {
      type: String
    }
  },
  computed: {
    btnMod() {
      let btnClass = null;
      let btnActiveClass = null;

      if (this.iconName && !this.headerArea) {
        btnClass = "button--icon";
      } else if (this.iconName && this.headerArea) {
        btnClass = "button--icon button-counter--header";
      } else if (!this.iconName && this.headerArea) {
        btnClass = "button-counter--header";
      } else {
        btnClass = "";
      }
      if (this.isActive) {
        btnActiveClass = " button-counter--active";
      } else {
        btnActiveClass = "";
      }
      return btnClass + btnActiveClass;
    },
    mod() {
      let [mods, modsNew] = "";
      if (this.modifier) {
        mods = this.modifier.split(" ");
        modsNew = mods.map(m => "button-counter--" + m).join(" ");
        return modsNew;
      } else {
        return "";
      }
    }
  },
  methods: {
    // toggle() {
    //   this.isActive = !this.isActive;
    // },
    clickHandler() {
      // this.toggle();
      this.$emit("tab", this.index);
    }
  }
};