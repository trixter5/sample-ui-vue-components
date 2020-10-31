import svgIcon from "./../../svgIcon.vue";
import DropdownMenu from "./../Dropdown-menu/index.vue";
import listItem from "./../Item-list/index.vue";
import ButtonLabel from "./../Buttons/Button-label/index.vue";
import Avatar from "./../../Avatar/index.vue";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  components: {
    svgIcon,
    DropdownMenu,
    listItem,
    ButtonLabel,
    Avatar,
    VuePerfectScrollbar
  },
  data() {
    return {
      isOpen: false,
      activeIndex: 0,
      selected: null,
      selectedAva: null,
      list: this.arr
    };
  },
  props: {
    arr: {
      type: Array,
      default: () => {
        return [
          {
            index: 0,
            text: 0,
            active: true
          }
        ];
      }
    },
    width: {
      type: String
    },
    avatar: {
      type: Boolean
    },
    iconType: {
      type: Number,
      default: 1
    },
    mod: {
      type: String,
      default: ""
    }
  },
  computed: {
    styleWidth() {
      return `width: ${this.width}px`;
    },
    iconName() {
      return this.iconType === 1 ? this.isOpen ? 'Arrow-expand-top' : 'Arrow-expand-bottom' : this.isOpen ? 'Arrow-dropdown-top' : 'Arrow-dropdown-bottom'
    }
  },
  methods: {
    select(e) {
      this.activeIndex = e.index;
      this.selected = e.text;
      this.selectedAva = e.listAva ? e.listAva : "";
      this.list = this.arr.filter(item => item.text !== this.selected);
      this.$emit("setItemList", e);
    }
  },
  mounted() {
    /*if (this.arr.length > 1)
      this.list = this.arr.filter(item => item.index !== this.activeIndex);
    else this.list = this.arr;*/
    // let activeItem = this.arr.filter(item => {
    //   return item.active;
    // });
    // if (activeItem.length) {
    //   this.arr.forEach(item => {
    //     if (item.active) {
    //       this.selected = item.text;
    //     }
    //   });
    //   this.list = this.arr.filter(item => {
    //     return item.active === false;
    //   });
    // } else {
    //   this.list = this.arr.slice(1);
    //   this.selected = this.list[0].text;
    // }
    this.selected = this.arr[0].text;
    this.list = this.arr.filter(item => item.text !== this.selected);
  }
};
