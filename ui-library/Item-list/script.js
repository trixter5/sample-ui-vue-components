import SvgIcon from "../../svgIcon/index.vue";

export default {
  components: {
    SvgIcon
  },
  props: {
    iconName: {
      type: String,
      required: false,
      default: ""
    },
    draggable: {
      type: Boolean,
      required: false,
      default: false
    },
    text: {
      default: ""
    },
    modifier: {
      type: [Array, String]
    }
  },
  computed: {
    mod() {
      let [mods, modsNew] = "";
      if (this.modifier) {
        mods = this.modifier.split(" ");
        modsNew = mods.map(m => "list-item--" + m).join(" ");
        return modsNew;
      } else {
        return "";
      }
    }
  },
  methods: {
    clickListItem() {
      this.$emit("clickListItem");
    }
  }
};
