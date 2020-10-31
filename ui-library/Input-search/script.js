import SvgIcon from "../../svgIcon/index.vue";

export default {
  components: {
    SvgIcon
  },
  inheritAttrs: false,
  model: {
    prop: "model"
  },
  props: {
    model: {
      type: String,
      required: true
    },
    placeholder: {
      type: String
    }
  }
};
