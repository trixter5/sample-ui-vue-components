import ButtonLabel from "./../Buttons/Button-label";
import ButtonIcon from "./../Buttons/Button-icon";
import ListItemMenu from "./../List-item-menu";
import DropdownMenu from "./../Dropdown-menu";

export default {
  components: {
    ButtonLabel,
    ButtonIcon,
    DropdownMenu,
    ListItemMenu
  },
  data() {
    return {
      isOpen: false,
      activeIndex: 1,
      selected: this.arr[0].btnText,
      list: this.arr
    };
  },
  props: {
    arr: {
      type: Array
    }
  },
  methods: {
    select(e) {
      this.activeIndex = e.index;
      this.selected = e.btnText;
      this.list = this.arr.filter(item => item.index !== this.activeIndex);
    }
  }
};
