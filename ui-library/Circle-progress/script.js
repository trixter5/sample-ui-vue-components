import svgIcon from "./../../svgIcon/index.vue";
export default {
  name: "CircleProgress",
  components: {
    svgIcon
  },
  data() {
    return {
      width: this.size,
      height: this.size
    };
  },
  props: {
    progress: {
      type: String,
      default: "0 0"
    },
    size: {
      type: String,
      default: "34"
    }
  },
  computed: {
    styleSize() {
      return `width: ${this.width}rem; height: ${this.height}rem;`;
    },
    computedProgress() {
      return `${this.progress} 200.9`;
    },
    text() {
      return `${this.progress}%`;
    }
  }
};
